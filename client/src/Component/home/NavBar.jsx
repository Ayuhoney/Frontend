import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constents/data";


const Component = styled(Box)(({ theme }) => ({  //make resposive using meterial UI

  display: 'flex',
  margin: '6vh 16vh 0 13vh',
  justifyContent: 'space-between',
  textAlign:'center',
  overflow:'overlay',
  [theme.breakpoints.down('lg')]: {
      margin:0
  }
}));

const Text = styled(Typography)`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  font-family: inherit;
  overflow:'overlay',
`;

export const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Box>
          <img src={data.url} alt="NavLogo" style={{ width: 70 }} />

          <Text>{data.text}</Text>
        </Box>
      ))}
    </Component>
  );
};
