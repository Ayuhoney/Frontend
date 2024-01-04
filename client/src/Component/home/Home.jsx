import { Banner } from "./Banner"
import { NavBar } from "./NavBar"
import { Box,styled } from "@mui/material"

import {getProducts} from '../../redux/actions/productActions'
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";

import {Slide} from './Slide.jsx'
import {MidSlide} from './MidSlide.jsx'

import MidSection from './MidSection.jsx';

const Component = styled(Box)(({ theme }) => ({

    padding:'0px 7px 15px 7px',
    background:'#F2F2F2',
    
    [theme.breakpoints.down('md')]: {
      padding:'0'
  }
  }));

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

        <MidSlide products={products} title="Suggested Items" timer={false}/>
        <MidSection/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Session's Top picks" timer={true}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/>          
        
          
      </Component>
      
    </>
  )
}