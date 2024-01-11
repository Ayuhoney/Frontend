// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';
import { addToCart } from '../../redux/actions/cartActions';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useState } from 'react';
import {Button,Box,styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 70px'
    }
}))

const Image = styled('img')({
    padding:'30px',
    border: '0px solid #f0f0f0',
    boxShadow:'0px 1px 2px 3px rgb(0 123 0 / 10%)',
    width: '90%',
    marginLeft: '-16%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width:'44%',
    borderRadius:'2px',
    height:'45px',
    color:'#FFF',
    margin:'10px',
    marginLeft:'-10%',
    fontWeight: '600',
    [theme.breakpoints.down('lg')]: {
        width:'40%'
    },
    [theme.breakpoints.down('sm')]: {
        width:'39%',
    }
}))


const ActionItem = ({ product }) => {
    const {id} = product; // Assuming the product has a property isInWishlist
    const navigate = useNavigate();
    const [quantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const addItemToWishlist = () => {
        dispatch(addToCart(id, quantity));
        navigate('/wishlist');
    }

    return (
        <LeftContainer>
            <Box style={{ position: 'relative' }}>
                <Image src={product.detailUrl} alt="Product Image" />
                <Button style={{ color: 'red', position: 'absolute', top: 10, right: 35 }} onClick={() => addItemToWishlist()} variant="text"><FavoriteIcon/></Button>   
            </Box>
            <StyledButton onClick={() => addItemToCart()} style={{ marginRight: 59, background: '#ff9f00' }} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton style={{ background: '#fb641b' }} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;