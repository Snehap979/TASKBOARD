import React from "react";
import SearchBar from "./UI/SearchBarComponent";
import AppBarComponent from "./UI/AppBar";
import { Box } from "@mui/material";
import TaskBoard from "./Components/TaskBoard";
import SimpleMenu from './UI/FilterComponent'
const App = () => {
  return (
    <div>
      <AppBarComponent />
      <Box mt={4} >
        <SearchBar></SearchBar>
        <SimpleMenu/>
      </Box>
     <TaskBoard/>
    </div>
  );
};

export default App;



