import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constents/data";

const Component = styled(Box)`
  display: flex;
  margin: 6vh 16vh 0 13vh;
  justify-content: space-between;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  font-family: inherit;
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
