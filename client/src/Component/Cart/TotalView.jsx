import { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: black;
    font-weight:600 
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 2px solid #f0f0f0;

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
