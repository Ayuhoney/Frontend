import { Box,Typography,styled} from '@mui/material';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { LoginDialog } from '../login/LoginDialog';
import { useState } from 'react';

const Wrapper = styled(Box)`
  display:flex;
  margin:0 -7% 0 auto;
  align-items: center;
  

  & > p{

    margin-bottom: 13px;
    margin-left: 0px;
    display:flex;
  }
`;
const Container = styled(Box)`
  display:flex;
  margin-top:-2%;
  margin-left: 10px;
`;

const LoginButton = styled(Button)`   

      margin: auto;
      margin-bottom: 13px;
      margin-left: 9px;
      font-weight:600
      display:flex;
`;
export const CustomButtons = () => {

  const [open,setopen] = useState(false);

  const openDialog = () => {
      setopen(true);
  }
  return (

     <Wrapper>
      <LoginButton onClick={()=>openDialog()} variant="contained" style={{width:138,height:32,color:"#2874f0",background:"white",fontWeight:600}}>Login</LoginButton>

      <Typography style={{marginTop:3,width:152,fontWeight:600}}>Become a Seller</Typography>
      <Typography style={{marginTop:3,fontWeight:600,width:66}}>More</Typography>
      
      <Container>
          <ShoppingCartIcon/>
          <Typography>Cart</Typography>
      </Container> 
      <LoginDialog open={open} setopen={setopen}/>
    </Wrapper>
  )
}
