
import {Typography, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '25%',
    padding:'20px'
});

const Additeam = styled(Link)(({ theme }) => ({
    padding: '10px 24px',
    marginTop:30,
    boxShadow: '0 -2px 10px 0 rgb(0 123 0 / 10%)',
    border:'3px solid #f0f0f0',
    textDecoration:'none',
    color:'inherit'
  }));

const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>&nbsp;&nbsp;&nbsp;<br/>
                <Additeam to="/" variant="contained" component="span">Add items to it now.</Additeam>
            </Container>
        </Component>
    )
}

export default EmptyCart;