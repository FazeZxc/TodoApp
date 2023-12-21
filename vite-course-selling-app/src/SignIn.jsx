import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { Card  } from '@mui/material';

function SignIn() {
    return <div>
        
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant={"h6"}>
                    Welcome Back , Sign In below
                </Typography>
            </div>
        
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Card variant="outlined" style={{width: 400, padding: 20}}>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <br /><br />
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' />
                <br /><br />
                <Button variant="contained">Log In</Button>
            </Card>
        </div>
    </div>
}


export default SignIn;