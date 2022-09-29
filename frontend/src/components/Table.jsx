import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';
import LoggedInNavbar from './LoggedInNavbar';
import { TextField } from '@mui/material';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {ApolloClient , ApolloProvider , HttpLink, InMemoryCache} from "@apollo/client";
import {gql,useQuery,useMutation} from "@apollo/client";

const output = (arg)=>{

        if(arg<225)

        return 'IDEAL';

        else if(arg>=225 && arg<598)

        return 'LOW';

        else if(arg>=598 && arg<822)

        return 'AVERAGE';

        else

        return 'HIGH';

    }

function createData(name, calories, fat, carbs) {
  let range = output(carbs);
  return { name, calories, fat, carbs, range };
}


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

const rows = [
  createData('January', 159, 6.0, 165),
  createData('October', 237, 200.0, 437),
  createData('December', 262, 300.0, 562),
  createData('April', 305, 300, 605),
  createData('March', 356, 500, 856),
];


export default function DenseTable() {
    const [year, setYear] = useState(0);
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'20%',marginLeft:'25px', marginBottom:'10px'};

    const client  = new ApolloClient({
      cache : new InMemoryCache(),
      link: new HttpLink({
        uri : "https://localhost:5001/graphql" //for consuming the graphql api
      }),
      credentials : "same-origin"
    })

    const email = window.sessionStorage.getItem("email");
    const [uID,setUserid] = useState("");

    //querying to fetch userid
    client.query({
        query: gql`
    query get_user($email:String!) {
      userByEmail(email:$email) {
        uID
      }}

    `,
    variables: {email: email}
      }).then(result => {
        setUserid(result.data.userByEmail[0].uID);
    });


    const q1_val = {
      uID:uID,
      year:parseInt(year)
    }

    //querying to fetch by userid and year
    const [did,setdid] = useState([0,1]);
    client.query({
      query:gql`
        query get_did($year:Int!,$uID:Int!){
          domesticFootprintByYearAndUser(year:$year,uID:$uID){
            dID
          }
        }
      `,
      variables:{year:q1_val.year,uID:q1_val.uID}
    }).then(result=>{
      setdid(result.data.domesticFootprintByYearAndUser);
    });

    

    

    //query to fetch domestic id
    // client.query({
    //   query:
    // })



  return (
    
    <div>
    <LoggedInNavbar/>
    <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:'20px'}}>
        {/* <form onSubmit={ (val)=>setYear(val.target.value)}> */}
        <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                    style={{}}  />
        <Button variant="contained" size="medium" style={btnStyle} type="submit">Submit</Button>
        
        {/* </form> */}
        
    </div>
        <div style={{margin:'50px 70px'}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="center">Transport Use (C02 in kg)</TableCell>
            <TableCell align="center">Domestic Use (C02 in kg)</TableCell>
            <TableCell align="center">Total (C02 in kg)</TableCell>
            <TableCell align="center">Range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories} &nbsp; <EditIcon style={{color:'#428558',cursor:'pointer'}}/> &nbsp; <DeleteIcon style={{color:'#428558',cursor:'pointer'}}/></TableCell>
              <TableCell align="center">{row.fat} &nbsp; <EditIcon style={{color:'#428558', cursor:'pointer'}}/> &nbsp; <DeleteIcon style={{color:'#428558',cursor:'pointer'}}/>  </TableCell>
              <TableCell align="center">{row.carbs} </TableCell>
              <TableCell align="center">{row.range}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  );
}
