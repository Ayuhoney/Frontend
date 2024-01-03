import { Banner } from "./Banner"
import { NavBar } from "./NavBar"
import { Box,styled } from "@mui/material"

import {getProducts} from '../../redux/actions/productActions'
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";



const Component = styled(Box)`

    padding:0px 7px 15px 7px;
    background:#F2F2F2;
`;

export const Home = () => {

     const {products} = useSelector(state =>state.getProducts); //redux store state hai naki jo import kie h
     console.log(products);
     
     const dispatch = useDispatch();

      useEffect(()=>{

        dispatch(getProducts());

      },[dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  )
}