import React from "react";
import Search from "./Search";
import { CustomButtons } from "./CustomButtons";
import { AppBar, Box, Typography, Toolbar, styled } from "@mui/material";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 50px;
`;
const Component = styled(Box)`
  margin-left: 15%;
  margin-top: -1%;
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
export const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar  style={{minHeight:62}}>
        <Component>
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
        <Box>
          <CustomButtons/>
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};
