
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

 import React from 'react'
 
 function sidebar() {
   return (
    <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem>
      <Link to="/documentation">Documentation</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/calendar">Calendar</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/e-commerce">E-commerce</Link>
    </MenuItem>
  </Menu>
</Sidebar>
   )
 }
 
 export default sidebar



