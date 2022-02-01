import { useState, useEffect, useRef, useContext } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Button from "@mui/material/Button"
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from "@mui/material/Divider"
import { useNavigate } from "react-router-dom"

import github_logo from "../../assets/github_logo.png"

import { UserContext } from "../../auth"


import JoinModule from "./JoinModule.js"

const ITEM_HEIGHT = 48

const menuItems = [
    "ABC123 - C programming",
    "ODJ343 - Fullstack project",
    "DAG555 - Java Web Development"
]

const taskItems = [
    "1.1 Hello World",
    "1.2 For-loops",
    "2.1 HashMaps and ArrayLists"
]

const testModuleKeys = ["BBB123"]

const NavBar = ({ setAlertContext }) => {
    const [moduleMenuAnchorEl, setModuleMenuAnchorEl] = useState(null)
    const [selectedModule, setSelectedModule] = useState("Modules")
    const isModuleMenuOpen = Boolean(moduleMenuAnchorEl)

    const [taskMenuAnchorEl, setTaskMenuAnchorEl] = useState(null)
    const [selectedTask, setSelectedTask] = useState("Tasks")
    const isTaskMenuOpen = Boolean(taskMenuAnchorEl)

    const {user} = useContext(UserContext)

    console.log("user ", user)

    //let navigate = useNavigate()

    const handleModuleMenuClose = (event) => {
        setModuleMenuAnchorEl(null)
    }
    const handleModuleMenuClick = (event) => {
        setModuleMenuAnchorEl(event.currentTarget)
    }
    const handleModuleSelection = (item) => {
        setSelectedModule(item)
        setTaskMenuAnchorEl(taskMenuRef.current)
        handleModuleMenuClose()
    }

    const handleTaskMenuClick = (event) => {
        setTaskMenuAnchorEl(event.currentTarget)
    }
    const handleTaskMenuClose = (event) => {
        setTaskMenuAnchorEl(null)
    }
    const handleTaskSelection = (item) => {
        setSelectedTask(item)
        handleTaskMenuClose()
        // ex. /modules/ABC123/tasks/1
        //navigate(`/modules/${selectedModule}/tasks/${selectedTask}`)
    }

    console.log("render NavBar")

    const taskMenuRef = useRef(null)

    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button
                            variant="contained" 
                            onClick={handleModuleMenuClick}
                            disableElevation
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            {selectedModule}
                        </Button>
                        <Menu
                            anchorEl={moduleMenuAnchorEl}
                            open={isModuleMenuOpen}
                            onClose={handleModuleMenuClose}
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
                                {menuItems.map(item => (
                                    <MenuItem
                                        key={item}
                                        selected={item === selectedTask}
                                        onClick={() => handleModuleSelection(item)}
                                    >
                                        {item}
                                    </MenuItem>
                                    )
                                )}
                            </Menu>

                        <Divider orientation="vertical">Divider</Divider>

                        <Box flexGrow={1}>
                            <Button
                                variant="contained" 
                                onClick={handleTaskMenuClick}
                                disabled={selectedModule === "Modules"}
                                disableElevation
                                endIcon={<KeyboardArrowDownIcon />}
                                ref={taskMenuRef}
                            >
                                {selectedTask}
                            </Button>
                        </Box>
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
                            {taskItems.map(item => (
                                <MenuItem
                                    key={item}
                                    selected={item === selectedTask}
                                    onClick={() => handleTaskSelection(item)}
                                >
                                    {item}
                                </MenuItem>
                                )
                            )}
                        </Menu>

                        <Button
                            variant="contained"
                            disableElevation
                            endIcon={<img src={github_logo} />}
                        >
                            Sign in
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}

export default NavBar