
import { Header } from "./Component/header/Header";
import { Home } from "./Component/home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop:54}} >
        <Home />
      </Box>
    </div>
  );
}

export default App;
