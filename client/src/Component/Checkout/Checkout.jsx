import { useEffect,useState } from 'react';

import {Box,TextField, Typography, Button, Grid, styled, AppBar } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import TotalView from './TotalView';
import EmptyCart from './EmptyCheckout';
import CartItem from './CheckoutIteam';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {DataContext} from '../../context/ContextProvider'

//import {post} from '../../utils/paytm';
//import { payUsingPaytm } from '../../service/api';


const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 10px 24px;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 1px solid #f0f0f0;
    margin-bottom:2px;


`;
const Login = styled(Box)`
    padding: 10px 24px;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 1px solid #f0f0f0;
    margin-bottom:2px;

`;
const Delivery = styled(Box)`
    padding: 10px 24px;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 1px solid #f0f0f0;
    margin-bottom:2px;

`;


const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 123 0 / 10%);
    border: 3px solid #f0f0f0;

`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
    font-weight:600;
`;

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 50px;
`;
const Components = styled(Link)`
  margin-left: 15%;
  margin-top: -1.2%;
  text-decoration:none;
  color:inherit;
`;
const SUbHeading = styled(Typography)`
  font-size: 10px;
  margin-top: -9px;
  margin-left:3%;
  font-style: italic;
  font-weight:600
`;

const PlusImage = styled("img")({
  marginLeft: 1,
  marginTop: -8,
  width:10,
  height:10
});

const Price = styled(Typography)`
    float: right;
    font-weight:600;
    margin-left:10px;
    margin-top:2px;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const LoginButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    font-weight:600;
    top:-29px;
`;

const Wrapper = styled(Box)(({ theme }) => ({
    padding: '10px 35px',
    display:'grid',
    flexDirection: 'column',
    '& >*':{
        marginTop:'29px'
    },
    [theme.breakpoints.down('lg')]: {
        marginTop:'29px'
    }
}));


const totalAmount = (cartItems) => {

    let totalPrice = 0, totalDiscount = 0;
    
    cartItems.forEach(item => {
        totalPrice += item.price.mrp * item.quantity;
        totalDiscount += (item.price.mrp - item.price.cost) * item.quantity;
    });

    return { totalPrice, totalDiscount };
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    Address: '',
    pincode: '',
    phone: '',
    country:'',
    state:''
};


export const Checkout = () => {

    const logoURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL  ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const { id } = useParams();

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const { totalPrice, totalDiscount } = totalAmount(cartItems);
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    }, [cartItems]);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const buyNow = async () => {
        //let response = await payUsingPaytm({ amount: 500, email: 'ayush2211207@gmail.com'});
        // var information = {
        //     action: 'https://securegw-stage.paytm.in/order/process',
        //     params: response    
        // }
        //post(information);
    }


    const {account} = useContext(DataContext);

        const [expanded, setExpanded] = useState(false);
      
        const handleButtonClick = () => {
          setExpanded(!expanded);
        };

        const [ signup, setSignup ] = useState(signupInitialValues);
        const onInputChange = (e) => {
            setSignup({ ...signup, [e.target.name]: e.target.value });
        }
        console.log(signup)

    return (
        <>
        <StyledHeader>
        <Components style={{marginRight:15}} to="/">
          <img src={logoURL} alt="logo" style={{ marginTop:27, width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SUbHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SUbHeading>
            <PlusImage src={subURL} alt="logo" />
          </Box>
        </Components>
        </StyledHeader>

        { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    
                    {/* login */}
                    <Login>
                        <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                            Login : &nbsp; {account}
                            <span>
                            {account && <CheckCircleOutlinedIcon color='success' />}
                            </span>
                        </Typography>
                    </Login>

                    {/* Address */}
                    <Delivery>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>Delivery Address </Typography>
                        <LoginButton  variant="contained" onClick={handleButtonClick}>
                            {expanded ? 'Collapse' : 'Expand'}
                            </LoginButton>
                            {expanded && (

                            <Box style={{ marginTop: '10px', border: '1px solid #ddd', padding: '10px' }}>
                            
                        <Wrapper>  

                            <span><strong>Enter Delivery Address :</strong> </span>
  
                            <TextField style={{marginLeft:'-30%'}} id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='Address' label='Enter Adress' />
                            <TextField id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='pincode' label='Enter Pincode' />
                            <TextField id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <TextField id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='state' label='Enter State' />
                            <TextField id="outlined-password-input" autoComplete="current-password" onChange={(e) => onInputChange(e)} name='country' label='Enter Country' />
                            <Button  style={{ marginTop:'6%',marginLeft:'5%', width:130}} variant="contained" >Submit</Button>

                        </Wrapper>
                        </Box>)}
                    </Delivery>
                    {/* order Summary */}
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>Order Summary&nbsp;({cartItems?.length})</Typography>
                    </Header>
                        {   cartItems.map((item,idx) => (
                                <CartItem  item={item} key={idx} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <BottomWrapper>

                        <StyledButton onClick={() => buyNow()} variant="contained">
                            Place Order 
                              <TotalAmount>
                                <Price>₹&nbsp;{price - discount + 40}</Price>
                              </TotalAmount>
                        </StyledButton>

                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
            </Component> : <EmptyCart />
        }
        </>

    )
}
