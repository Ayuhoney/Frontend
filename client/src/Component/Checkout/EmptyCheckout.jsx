
import {Typography, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import cart from '../../assets/images/emptyCart.gif'

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
    border: "0px solid #f0f0f0",
    boxShadow: "0px 1px 7px 3px rgb(0 123 124/ 21%)",
    textDecoration:'none',
    color:'inherit'
  }));

const EmptyCheckout = () => {
    const imgurl = cart;
    
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

export default EmptyCheckout;