import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



function Appbar() {
    const navigate = useNavigate();
    return <div style={{
        display: "flex",
        justifyContent: "space-between"
    }}>
        <div>
            <Typography>Coursera</Typography>
        </div>
        <div>
            <Button variant onClick={()=>{
                navigate("/signup")
            }}>Sign Up</Button>
            <Button variant="contained" onClick={()=>{
                navigate("/login")
            }}>Log In</Button>
        </div>
    </div>
}

export default Appbar;