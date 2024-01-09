import { Badge, Box,Typography,styled} from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { LoginDialog } from '../login/LoginDialog';
import { useState ,useContext} from 'react';
import {DataContext} from '../../context/ContextProvider'
import Profile from './Profile.jsx'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Wrapper = styled(Box)(({ theme }) => ({
  
  display:'flex',
  margin:'0 3% 0 auto',
  
  '& > *':{
    marginRight:40,
    fontSize:16,
    alignIteams:'center'
  },
  [theme.breakpoints.down('md')]: {
    display: 'block'
}
}));

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  marginTop:'4px',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 4,
    left:7,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const LoginButton = styled(Button)`   

      margin: auto;
      margin-bottom: 12px;
      margin-left: 19px;
      font-weight:600;
      margin-right:30px;
`;

export const CustomButtons = () => {

  const [open,setopen] = useState(false);
  const {account,setAccount} = useContext(DataContext);

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;

  const openDialog = () => {
      setopen(true);
  }

  return (

     <Wrapper>
      {    
           account ? <Profile account={account} setAccount={setAccount}  /> :
          <LoginButton onClick={()=>openDialog()} variant="contained" style={{width:138,height:32,color:"#2874f0",background:"white",fontWeight:600}}>Login</LoginButton>
      }

      <Typography style={{marginTop:3,width:152,fontWeight:600}}>Become a Seller</Typography>
      <Typography  style={{marginTop:3,fontWeight:600,width:66}}>More</Typography> 
      
      <Container to="/cart">
        <StyledBadge badgeContent={cartItems?.length}color='secondary'>
          <ShoppingCartIcon/>
        </StyledBadge>
      </Container> 
      <LoginDialog open={open} setopen={setopen}/>
    </Wrapper>
  )
}
