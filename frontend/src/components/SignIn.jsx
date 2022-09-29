import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {gql,useMutation} from "@apollo/client";
import {useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import LoggedInNavbar from './loginnavbar';
// import CssTextField from '@mui/material/CssTextField';
import { styled } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Decarbonization
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const LOGIN_USER = gql`
  mutation login($user: userInput!){
    login(user:$user)
  }
`;

const GET_UID = gql`
mutation userByEmail($email: String!) {
  userByEmail(email: $email) {
    uID
  }
}
`;


export default function SignIn() {

  const [email, setemail] = useState('');

  const [check] = useMutation(LOGIN_USER);
  const[getuid] = useMutation(GET_UID);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      "email": data.get('email'),
      "password": data.get('password')
    }
    
    
    check({variables:{user:values}})
    .then(data => {
      console.log(data.data.login);
      if(data.data.login){
        sessionStorage.setItem("email", email);
        getuid({variables:{"email":email}})
        .then(data =>{
          let results = data.data.userByEmail;
          results.map( result => {
            console.log(result.uID);
            sessionStorage.setItem("uid", result.uID);
            console.log(sessionStorage.getItem("uid"));
            navigate("/home");
            })
        }
        ).catch(err => {
          navigate("/error");
          console.log(err);
      })
      }else{
      }
    })
    .catch(err => {
      console.log(err);
    })
  };


  // return (
  //   <ThemeProvider theme={theme}>
  //     <Grid container component="main" sx={{ height: '100vh' }}>
  //       <CssBaseline />
  //       <Grid
  //         item
  //         xs={false}
  //         sm={4}
  //         md={7}
  //         sx={{
  //           backgroundImage: 'url(https://source.unsplash.com/random)',
  //           backgroundRepeat: 'no-repeat',
  //           backgroundColor: (t) =>
  //             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //         }}
  //       />
  //       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //         <Box
  //           sx={{
  //             my: 8,
  //             mx: 4,
  //             display: 'flex',
  //             flexDirection: 'column',
  //             alignItems: 'center',
  //           }}
  //         >
  //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //             <LockOutlinedIcon />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //             Sign in
  //           </Typography>
  //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="email"
  //               label="Email Address"
  //               name="email"
  //               autoComplete="email"
  //               autoFocus
  //               onChange={(e) => setemail(e.target.value)}
  //             />
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               name="password"
  //               label="Password"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //             />
  //             <FormControlLabel
  //               control={<Checkbox value="remember" color="primary" />}
  //               label="Remember me"
  //             />
  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               sx={{ mt: 3, mb: 2 }}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item>
  //                 <Link href="http://localhost:3000/signup" variant="body2">
  //                   {"Don't have an account? Sign Up"}
  //                 </Link>
  //               </Grid>
  //             </Grid>
  //             <Copyright sx={{ mt: 5 }} />
  //           </Box>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </ThemeProvider>
  // );
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
    color: 'green',
},
'& .MuiInput-underline:after': {
borderBottomColor: 'green',
},

'& .MuiOutlinedInput-input': {
marginTop:'0px',
padding: '10px 12px',
paddingTop:'15px',
},
'& .MuiOutlinedInput-root': {
'& fieldset': {
    borderColor: 'black',
},

'&:hover fieldset': {
    borderColor: 'green',
},
'&.Mui-focused fieldset': {
borderColor: 'green',
},
},
});
  return (
        <div style={{backgroundColor:"rgb(198, 235, 197)", paddingBottom:'100px'}}>
        <LoggedInNavbar />
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
              <Avatar sx={{ m: 1, bgcolor: 'rgb(107, 156, 123);' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{backgroundColor:"rgb(107, 156, 123)"}}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2 " style={{color:"rgb(107, 156, 123)"}}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" style={{color:"rgb(107, 156, 123)"}}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        </div>
      );
} 

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
// import LoggedInNavbar from './loginnavbar';
// function Copyright(props) {
  
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get('email'),
//   //     password: data.get('password'),
//   //   });
//   // };
//   const [email, setemail] = useState('');

//   const [check] = useMutation(LOGIN_USER);
//   const[getuid] = useMutation(GET_UID);
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const values = {
//       "email": data.get('email'),
//       "password": data.get('password')
//     }
    
    
//     check({variables:{user:values}})
//     .then(data => {
//       console.log(data.data.login);
//       if(data.data.login){
//         sessionStorage.setItem("email", email);
//         getuid({variables:{"email":email}})
//         .then(data =>{
//           let results = data.data.userByEmail;
//           results.map( result => {
//             console.log(result.uID);
//             sessionStorage.setItem("uid", result.uID);
//             console.log(sessionStorage.getItem("uid"));
//             navigate("/home");
//             })
//         }
//         ).catch(err => {
//           console.log(err);
//       })
//         // console.log(window.sessionStorage.getItem("email"));
//         navigate("/");
//       }else{
//       }
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   };


//   const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//     color: 'green',
//   },
//   '& .MuiInput-underline:after': {
//   borderBottomColor: 'green',
//   },
  
//   '& .MuiOutlinedInput-input': {
//   marginTop:'0px',
//   padding: '10px 12px',
//   paddingTop:'15px',
//   },
//   '& .MuiOutlinedInput-root': {
//   '& fieldset': {
//     borderColor: 'black',
//   },
  
//   '&:hover fieldset': {
//     borderColor: 'green',
//   },
//   '&.Mui-focused fieldset': {
//   borderColor: 'green',
//   },
//   },
//   });
  

//   return (
//     <div style={{backgroundColor:"rgb(198, 235, 197)", paddingBottom:'100px'}}>
//     <LoggedInNavbar />
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'rgb(107, 156, 123);' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <CssTextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <CssTextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               style={{backgroundColor:"rgb(107, 156, 123)"}}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2 " style={{color:"rgb(107, 156, 123)"}}>
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2" style={{color:"rgb(107, 156, 123)"}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//     </div>
//   );
// }