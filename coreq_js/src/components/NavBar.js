import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Button from "@mui/material/Button"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;

const menuItems = [
    "ABC123 - C programming",
    "ODJ343 - Fullstack project",
    "DAG555 - Java Web Development"
]

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedModule, setSelectedModule] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleSelectedMenuItem = () => {

    }

    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button variant="contained" onClick={handleMenuClick} disableElevation endIcon={<KeyboardArrowDownIcon />}>
                            Modules
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: "auto",
                                },
                            }}
                        >
                            {menuItems.map(item => (
                                <MenuItem key={item} selected={item === selectedModule} onClick={handleClose}>
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