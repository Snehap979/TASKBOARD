import React, { useState } from "react";
import { TextField, InputAdornment, Container, Grid, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchValue, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Container spacing={4}>
      <Grid>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={searchValue}
        />
      </Grid>
    </Container>
  );
}

export default SearchBar;
