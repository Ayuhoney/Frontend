import { Banner } from "./Banner"
import { NavBar } from "./NavBar"
import { Box,styled } from "@mui/material"


const Component = styled(Box)`

    padding:1px;
    background:#F2F2F2;
`;
export const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  )
}