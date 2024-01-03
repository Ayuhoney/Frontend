
import { Header } from "./Component/header/Header";
import { Home } from "./Component/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/ContextProvider";


function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{marginTop:54}} >
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
