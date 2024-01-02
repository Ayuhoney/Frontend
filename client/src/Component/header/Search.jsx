import { InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'


const SearchContainer = styled(Box)`
  background:#fff;
  width:38%;
  border-radius:2px;
  margin-left:20px;
  margin-top: -1%;
  display:flex;
`;
const InputSearchBase = styled(InputBase)`

    padding-left:20px;
    width:100%;
    font-size:unset;
`;
const SearchIconWrapper = styled(Box)`

  color:#2874f0;
  padding:5px;
  display:flex;
`;
const Search = () => {
  return (
    <SearchContainer>
       <InputSearchBase placeholder='Search for products,brand and more'/>
      
       <SearchIconWrapper>
          <SearchIcon/>
       </SearchIconWrapper>

    </SearchContainer>
  )
}
export default Search;


