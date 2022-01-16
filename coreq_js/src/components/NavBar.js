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
    const [moduleMenuAnchorEl, setModuleMenuAnchorEl] = useState(null)
    const [selectedModule, setSelectedModule] = useState("Modules")

    const isModuleMenuOpen = Boolean(moduleMenuAnchorEl)

    const [taskMenuAnchorEl, setTaskMenuAnchorEl] = useState(null)
    const [selectedTask, setSelectedTask] = useState("Tasks")

    const isTaskMenuOpen = Boolean(taskMenuAnchorEl)

    const handleMenuClick = (event) => {
        setModuleMenuAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setModuleMenuAnchorEl(null)
    }
    const handleModuleSelection = (item) => {
        setSelectedModule(item)
        handleMenuClose()
    }
    const handleTaskMenuClick = (event) => {
        setTaskMenuAnchorEl(event.currentTarget)
    }
    const handleTaskMenuClose = (event) => {
        setTaskMenuAnchorEl(null)
    }

    console.log("render NavBar")

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
                            {selectedModule}
                        </Button>
                        <Menu
                            anchorEl={moduleMenuAnchorEl}
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
                                    onClick={(e) => handleModuleSelection(item)}
                                >
                                    {item}
                                </MenuItem>
                                )
                            )}
                        </Menu>

                        <Divider orientation="vertical">Divider</Divider>

                        <Button 
                            variant="contained" 
                            onClick={handleTaskMenuClick}
                            disabled={selectedModule === "Modules"}
                            disableElevation
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            {selectedTask}
                        </Button>
                        <Menu
                            anchorEl={taskMenuAnchorEl}
                            open={isTaskMenuOpen}
                            onClose={handleTaskMenuClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: "auto",
                                },
                            }}
                        >
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}

export default NavBar