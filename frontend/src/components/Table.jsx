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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
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
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];


export default function DenseTable() {
    const [year, setYear] = useState(0);
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'20%',marginLeft:'25px', marginBottom:'10px'};
  return (
    
    <div>
    <LoggedInNavbar/>
    <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:'20px'}}>
        <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                    style={{}}  onChange={ (val)=>setYear(val.target.value)}/>
        <Button variant="contained" size="medium" style={btnStyle}>Submit</Button>
        
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
              <TableCell align="center">{row.calories} &nbsp; <DeleteIcon style={{color:'#428558',cursor:'pointer'}}/> &nbsp; <EditIcon style={{color:'#428558',cursor:'pointer'}}/></TableCell>
              <TableCell align="center">{row.fat} &nbsp; <DeleteIcon style={{color:'#428558',cursor:'pointer'}}/> &nbsp; <EditIcon style={{color:'#428558', cursor:'pointer'}}/> </TableCell>
              <TableCell align="center">{row.carbs} </TableCell>
              {/* <TableCell align="center">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  );
}
