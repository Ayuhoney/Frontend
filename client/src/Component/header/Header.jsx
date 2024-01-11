import React,{ useState } from "react";
import Search from "./Search";
import { CustomButtons } from "./CustomButtons";
import { AppBar, Box, Typography, Toolbar,styled,Drawer,List,ListItem,IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 50px;
`;
const Component = styled(Link)`
  margin-left: 15%;
  margin-top: -1%;
  text-decoration:none;
  color:inherit;
`;
const SUbHeading = styled(Typography)`
  font-size: 10px;
  margin-top: -7%;
  margin-left: 16%;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 7,
  marginLeft: 4,
  marginTop: -2,
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('md')]: {
      display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  marginBottom:10,
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

export const Header = () => {
  const logoURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL  ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
   

  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }
  const handleOpen = () => {
      setOpen(true);
  }
  const list = () => (
    
    <Box style={{ width: 200,padding:10  }} onClick={handleOpen}>
        <List>
            <ListItem button>
                <CustomButtons /> 
            </ListItem>
        </List>
    </Box>
);

  return (
    <StyledHeader>

      <Toolbar  style={{minHeight:66}}>

        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu/>
        </MenuButton>
        <Drawer open={open}  onClose={handleClose}>
              {list()}
        </Drawer>

        <Component style={{marginRight:15}} to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SUbHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SUbHeading>
            <PlusImage src={subURL} alt="logo" />
          </Box>
        </Component>
        <Search/>
        <CustomButtonWrapper>
          <CustomButtons/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
