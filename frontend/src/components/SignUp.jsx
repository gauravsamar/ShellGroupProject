import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {gql,useQuery} from "@apollo/client";
import { Dashboard} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Decarburization
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


// const CHECK_USER = gql`
//   query check_user($email:String!){
//     userByEmail(email:$email){
//       uID
//     }
//   }
// `;

const LOGIN_USER = gql`
  mutation signup($user: userInput!){
    signup(user:$user)
  }
`;

const ADD_USER = gql`
  mutation createUser($user: userInput!){
    createUser(user:$user){
        username
    }
  }
`;

export default function SignUp() {

  // const navigate = useNavigate();
  const [check] = useMutation(LOGIN_USER);
  const navigate  = useNavigate();

  const[addUser] = useMutation(ADD_USER);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    // let email = data.get('email');
    // obj = {email:data.get('email'),password:data.get("password")};

    // const {loading,error,dat} = useQuery(CHECK_USER, {
    //   variables:{email}
    // })

    // return (<Dashboard email={email} />)
    // navigate("/dashboard",{replace:true,state:{email}})


    const values = {
        "email": data.get('email'),
        "password": data.get('password')
      }
    
    const user = {
        "email": data.get('email'),
        "password":data.get('password'),
        "username":data.get('firstName')
    }

    

      check({variables:{user:values}})
      .then(data => {
        console.log(data.data.signup);
        if(data.data.signup)navigate("/dashboard");
        else{
            addUser({variables:{user:user}})
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
      })
   
};










  return (

    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidths
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

  );
}


