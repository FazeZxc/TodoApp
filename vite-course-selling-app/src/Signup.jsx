import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { Card  } from '@mui/material';

function SignUp() {
    return <div>
        
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant={"h6"}>
                    Welcome to Coursera, Sign Up below
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
                <Button variant="contained"
        
                >Sign Up</Button>
            </Card>
        </div>
    </div>
}


export default SignUp;