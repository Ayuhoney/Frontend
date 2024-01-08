import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./Component/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/ContextProvider";

import { Header } from "./Component/header/Header";
import DetailView from './Component/ItemDetails/DetailView'
import Cart from './Component/Cart/Cart';


function App() {
  return (

    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop:54}} >
        <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path= '/cart' element={<Cart/>} />
            </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>

  
  );
}

export default App;
