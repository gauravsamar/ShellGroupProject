import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import LoggedInNavbar from '../LoggedInNavbar';
export default function Domestic(){
    const textStyle = {color : 'blue', margin:'10px', width:'88%', marginLeft:'40px'};
    const textStyles = {color : 'blue', margin:'10px', width:'90%'};
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'88%', marginLeft:'40px'};
    const [month,setMonth] = useState('');
    const [year,setYear] = useState(2022);
    const [lpg, setlpg] = useState(0);
    const [cng, settaxi] = useState(0);
    const [elec, setbus] = useState(0);
    const CssTextField = styled(TextField)({
            '& label.Mui-focused': {
            color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
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
    return(
        <div>
<LoggedInNavbar></LoggedInNavbar>
        <div style={{alignItems: 'center', display:"flex", justifyContent:"center",backgroundColor:'#C6EBC5',paddingTop:'30px', paddingBottom:'40px'}}>
        <div style={{backgroundColor:'white' , borderRadius: '15px', width: '65%', padding:'20px', paddingRight:'30px' }}>
        <h2 style={{width:'100%',textAlign:'center', color:'#428558', marginTop:'20px'
    , marginBottom:'30px'}}>Domestic Footprint</h2>
        <div style={{width:'94%',display:'flex',justifyContent:'space-between', paddingLeft:'30px',}}>  
            <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                    style={textStyles} onChange={ (val)=>setMonth(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                    style={textStyles}  onChange={ (val)=>setYear(val.target.value)}/>
            </div>
            <CssTextField id="outlined-basic" label="LPG Cylinder" variant="outlined"
            style={textStyle} />
            <CssTextField id="outlined-basic" label="CNG at home (m3)" variant="outlined"
            style={textStyle} />
            <CssTextField id="outlined-basic" label="Electricity (kWh)" variant="outlined"
            style={textStyle} />
            <Button variant="contained" size="medium" style={btnStyle} >Calculate my Footprint</Button>
        </div>
    </div>
    </div>)
}