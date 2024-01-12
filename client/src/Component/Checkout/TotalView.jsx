import { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 60px;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 1px solid #f0f0f0;
    margin-bottom:0px;
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


const totalAmount = (checkoutItems) => { 

    let totalPrice = 0, totalDiscount = 0;
    
    checkoutItems.forEach(item => {
        totalPrice += item.price.mrp * item.quantity;
        totalDiscount += (item.price.mrp - item.price.cost) * item.quantity;
    });

    return { totalPrice, totalDiscount };
};

const TotalView = ({ checkoutItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const { totalPrice, totalDiscount } = totalAmount(checkoutItems);
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    }, [checkoutItems]);

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>
                    Price ({checkoutItems?.length} item)
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

            <Header>
                <Heading><img  src={adURL} style={{ width:160 }} alt="IMages" /></Heading>
            </Header>
        </Box>
    );
};

export default TotalView;
