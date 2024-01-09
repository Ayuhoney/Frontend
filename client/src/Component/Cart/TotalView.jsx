import { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`;

const totalAmount = (cartItems) => {
    let totalPrice = 0, totalDiscount = 0;
    
    cartItems.forEach(item => {
        totalPrice += item.price.mrp * item.quantity;
        totalDiscount += (item.price.mrp - item.price.cost) * item.quantity;
    });

    return { totalPrice, totalDiscount };
};

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const { totalPrice, totalDiscount } = totalAmount(cartItems);
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    }, [cartItems]);

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>
                    Price ({cartItems?.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>
                    Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>
                    Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <TotalAmount>
                    Total Amount
                    <Price>₹{price - discount + 40}</Price>
                </TotalAmount>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    );
};

export default TotalView;
