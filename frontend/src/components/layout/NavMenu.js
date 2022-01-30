
// currently not in use
//-------------
import React, { useState } from "react"
import Menu from "@mui/material/Menu"
import Button from "@mui/material/Button"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const ITEM_HEIGHT = 48

const NavMenuButton = ({ label, handleClick, disabled }) => {
    return (
        <Button 
            variant="contained" 
            onClick={handleClick} 
            disableElevation 
            endIcon={<KeyboardArrowDownIcon />}
            disabled={disabled}
        >
            {label}
        </Button>
    )
}

const NavMenu = ({ children, selectedItem, buttonDisabled, anchorEl, setAnchorEl, isOpen }) => {

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <NavMenuButton
                label={selectedItem}
                handleClick={handleMenuClick}
                disabled={buttonDisabled}
            />
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleMenuClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "auto",
                    },
                }}
            >
                {children}
            </Menu>
        </div>
    )

}

export default NavMenu