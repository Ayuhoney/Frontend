//import { payUsingPaytm } from '../../service/api';
//import { post } from '../../utils/paytm';
//import { addToCart } from '../../redux/actions/cartActions';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useState } from 'react';
import {Button,Box,styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding:'15px'
});

const StyledButton = styled(Button)`
    width: 40%;
    border-radius: 2px;
    height: 45px;
    color: #FFF;
    margin:15px 23px;
`;

const ActionItem = ({ product }) => {

    const { id } = product;
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    // const addItemToCart = () => {
    //     dispatch(addToCart(id, quantity));
    //     navigate('/cart');
    // }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px',border: '1px solid #f0f0f0',width: '90%'}}>
                <Image src={product.detailUrl} /><br />
            </Box>
            <StyledButton  style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton  style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;