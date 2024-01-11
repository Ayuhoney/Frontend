import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./Component/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/ContextProvider";

import { Header } from "./Component/header/Header";
import DetailView from './Component/ItemDetails/DetailView'
import Cart from './Component/Cart/Cart';
import Footer from './Component/Footer/Footer.jsx';
import Wishlist from './Component/Wishlist/Wishlist.jsx';


function App() {
  return (
   <>
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop:54}} >
        <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path= '/cart' element={<Cart/>} />
              <Route path= '/wishlist' element={<Wishlist/>} />
            </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
    <Footer/>
    </>
  );
}

export default App;
