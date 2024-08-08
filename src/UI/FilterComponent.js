import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FilterListIcon
        onClick={handleClick}
      >
        Filter
      </FilterListIcon>
      <Menu
        id="filter"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Name</MenuItem>
        <MenuItem onClick={handleClose}>Date Created</MenuItem>
       
      </Menu>
    </div>
  );
}
