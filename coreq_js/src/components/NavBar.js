import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Button from "@mui/material/Button"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from "@mui/material/Divider"

import JoinModule from "./JoinModule.js"

const ITEM_HEIGHT = 48;

const menuItems = [
    "ABC123 - C programming",
    "ODJ343 - Fullstack project",
    "DAG555 - Java Web Development"
]

const testModuleKeys = ["BBB123"]

const NavBar = ({ setAlertContext }) => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)
    const [selectedModule, setSelectedModule] = useState(null)

    const isModuleMenuOpen = Boolean(menuAnchorEl)

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setMenuAnchorEl(null)
    }
    const handleSelectedMenuItem = (item) => {
        setSelectedModule(item)
        handleMenuClose()
    }

    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button 
                            variant="contained" 
                            onClick={handleMenuClick} 
                            disableElevation 
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            Modules
                        </Button>
                        <Menu
                            anchorEl={menuAnchorEl}
                            open={isModuleMenuOpen}
                            onClose={handleMenuClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: "auto",
                                },
                            }}
                        >
                            <MenuItem 
                                onKeyDown={(event) => {
                                    event.stopPropagation()
                                }} 
                                style={{ 
                                    backgroundColor: "transparent" 
                                }}
                            >
                                <JoinModule setAlertContext={setAlertContext}/>
                            </MenuItem>
                            <Divider />
                            {menuItems.map(item => (
                                <MenuItem
                                    key={item}
                                    selected={item === selectedModule}
                                    onClick={(e) => handleSelectedMenuItem(item)}
                                >
                                    {item}
                                </MenuItem>
                                )
                            )}
                        </Menu>
                        <Typography variant="h6" color="inherit" component="div">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}

export default NavBar