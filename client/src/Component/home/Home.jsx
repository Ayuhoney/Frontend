import { Banner } from "./Banner"
import { NavBar } from "./NavBar"
import { Box,styled } from "@mui/material"
import { LoginDialog } from "../login/LoginDialog";


const Component = styled(Box)`

    padding:0px 7px 15px 7px;
    background:#F2F2F2;
`;
export const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
      <LoginDialog/>
    </>
  )
}