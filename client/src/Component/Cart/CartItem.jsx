
import { Card, Box, Typography, Button, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { addEllipsis } from '../../utils/util';
import GroupButton from './GroupButton';

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    padding:10px;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;


const Remove = styled(Button)(({ theme }) => ({
    fontSize:'16px',
    display:'flex',
    marginTop:'7%',
    [theme.breakpoints.down('sm')]: {
        marginTop:'-7%'
    },
    [theme.breakpoints.down('mid')]: {
        marginTop:'-7%'
    }
}));


const CartItem = ({ id, item, removeItemFromCart }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Component>
            <LeftComponent>
                <img  alt="img" src={item.url} style={{ height: 110, width: 110 }} />
                <GroupButton itemId={item.id} /> 
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: RetailNet
                    <span><img  alt="IMg"src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                </SmallText>
                <Typography style={{ margin: '20px 0' }}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
            
                <Remove onClick={() => removeItemFromCart(item.id)}>
                <IconButton  size="large">
                    <DeleteOutlineIcon fontSize="inherit" style={{color:"#2874f0"}}/>
                </IconButton>
                </Remove>
            </Box>
        </Component>
    );
}

export default CartItem;
