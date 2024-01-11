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


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadIcon from '@mui/icons-material/Download';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




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

  const navs = [
    {
        title: "Notification Preferences",
        icon: <NotificationsIcon sx={{ fontSize: "18px" }} />,
        redirect: "https://www.flipkart.com/communication-preferences/push",
    },
    {
        title: "Sell on Flipkart",
        icon: <BusinessCenterIcon sx={{ fontSize: "18px" }} />,
        redirect: "https://seller.flipkart.com/sell-online",
    },
    {
        title: "24x7 Customer Care",
        icon: <LiveHelpIcon sx={{ fontSize: "18px" }} />,
        redirect: "https://www.flipkart.com/helpcentre",
    },
    {
        title: "Advertise",
        icon: <TrendingUpIcon sx={{ fontSize: "18px" }} />,
        redirect: "https://advertising.flipkart.com",
    },
    {
        title: "Download App",
        icon: <DownloadIcon sx={{ fontSize: "18px" }} />,
        redirect: "https://www.flipkart.com/mobile-apps",
    },
]


  const [open,setopen] = useState(false);
  const {account,setAccount} = useContext(DataContext);

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;

  const openDialog = () => {
      setopen(true);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const calculateTotalQuantity = (wishlistItems) => {
    const quantities = wishlistItems.map(item => item.quantity || 0);
      const totalQuantity = quantities.reduce((sum, quantity) => sum + quantity, 0);
  
    return totalQuantity;
  };
  

  return (

     <Wrapper>
      {    
           account ? <Profile account={account} setAccount={setAccount}  /> :
          <LoginButton onClick={()=>openDialog()} variant="contained" style={{width:138,height:32,color:"#2874f0",background:"white",fontWeight:600}}>Login</LoginButton>
      }
       
      <Container style={{ fontFamily:'inherit',marginRight:4,marginTop:5,width:152,fontWeight:600}}>Become a Seller</Container>
   

      <Typography style={{ marginRight: '3%' }}>
  <Button
    style={{ marginTop: '-4%', fontWeight: 600, color: 'inherit' }}
    id="basic-button"
    aria-controls={opens ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={opens ? 'true' : undefined}
    onMouseEnter={handleClick} 
  >
    More {opens ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </Button>

  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={opens}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    {navs.map((item, index) => (
      <MenuItem
        key={index}
        onClick={handleClose}
        sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: '8px 16px' }}
      >
        {item.icon}
        <Typography variant="body1">{item.title}</Typography>
      </MenuItem>
    ))}

    <MenuItem
      onClick={handleClose}
      sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: '8px 16px' }}
    >
      <Typography variant="body1">My account</Typography>
    </MenuItem>
  </Menu>
</Typography>

  
      
      <Container to="/cart">
        <StyledBadge badgeContent={cartItems?.length}color='secondary'>
          <ShoppingCartIcon/>
        </StyledBadge>
      </Container>

      <Container to="/wishlist">
        <StyledBadge badgeContent={calculateTotalQuantity(cartItems)}color='secondary'>
          <AddShoppingCartIcon/>
        </StyledBadge>
      </Container>  

      <LoginDialog open={open} setopen={setopen}/>
    </Wrapper>

    
  )
}
