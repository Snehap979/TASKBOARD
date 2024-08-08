import React from "react";
import SearchBar from "./UI/SearchBarComponent";
import AppBarComponent from "./UI/AppBar";
import { Box } from "@mui/material";
import SimpleMenu from './UI/FilterComponent'
const App = () => {
  return (
    <div>
      <AppBarComponent />
      <Box mt={4} >
        <SearchBar></SearchBar>
        <SimpleMenu/>
      </Box>
     
    </div>
  );
};

export default App;
