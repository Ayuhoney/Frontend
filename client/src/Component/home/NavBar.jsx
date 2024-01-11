import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constents/data";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const navs = [
  {
    title: "Tablet",
    redirect: "https://www.flipkart.com/communication-preferences/push",
  },
  {
    title: "Bike",
    redirect: "https://seller.flipkart.com/sell-online",
  },
  {
    title: "Phone",
    redirect: "https://www.flipkart.com/helpcentre",
  },
  {
    title: "Advertise",
    redirect: "https://advertising.flipkart.com",
  },
  {
    title: "Shoe",
    redirect: "https://www.flipkart.com/mobile-apps",
  },
  {
    title: "Fashion",
    redirect: "https://www.flipkart.com/fashion",
  },
  {
    title: "Electronics",
    redirect: "https://www.flipkart.com/electronics",
  },
  {
    title: "Home & Furniture",
    redirect: "https://www.flipkart.com/home-furniture",
  },

];


const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: theme.spacing(6, 8, 0, 7),
  justifyContent: 'space-between',
  textAlign: 'center',
  overflow: 'overlay',
  [theme.breakpoints.down('lg')]: {
    margin: 0,
  },
}));

const Text = styled(Typography)`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  font-family: inherit;
  overflow: overlay;
`;

const MenuBar = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

export const NavBar = () => {
  const [anchorEls, setAnchorEls] = React.useState(Array(navData.length).fill(null));

  const handleClick = (index, event) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };

  const handleClose = (index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  

  return (
    <Component>

      {navData.map((data, index) => (

        <MenuBar key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <img src={data.url} alt={`NavLogo-${index}`} style={{ width: 70 }} />
          <Text>{data.text}</Text>
          <MenuBar
            style={{ fontWeight: 600, color: 'inherit' }}
            id={`expand-button-${index}`}
            aria-controls={`expand-menu-${index}`}
            aria-haspopup="true"
            onMouseEnter={(event) => handleClick(index, event)}
          >
            {anchorEls[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </MenuBar>
          <Menu
            id={`expand-menu-${index}`}
            anchorEl={anchorEls[index]}
            open={Boolean(anchorEls[index])}
            onClose={() => handleClose(index)}
            MenuListProps={{
              'aria-labelledby': `expand-button-${index}`,
            }}
          >
            {navs.map((item, subIndex) => (
              <MenuItem
                key={subIndex}
                onClick={() => handleClose(index)}
                sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: '8px 16px' }}
              >
                <Typography variant="body1">{item.title}</Typography>
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => handleClose(index)}
              sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: '8px 16px' }}
            >
            </MenuItem>
          </Menu>
        </MenuBar>
      ))}
    </Component>
  );
};
