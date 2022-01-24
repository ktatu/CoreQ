import { Button as MuiButton } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const Button = ({ label, handleClick, endIcon, ref }) => {
    return (
        <MuiButton 
            variant="contained" 
            onClick={handleClick} 
            disableElevation 
            endIcon={endIcon}
            ref={ref}
        >
            {label}
        </MuiButton>
    )
}

export default Button