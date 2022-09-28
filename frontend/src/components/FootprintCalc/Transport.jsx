import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import LoggedInNavbar from '../LoggedInNavbar';


export default function Transport(){
    const textStyle = {borderColor: "green", color : '#428558', marginBottom:'12px', width:'100%', display:'flex',flexDirection:'column', marginLeft:'20px',};
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'100%',marginLeft:'25px', marginBottom:'40px'};
    const divStyle = {width:'48.4%', display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'10px'}
    const divsStyle = {width:'48.4%', display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'10px',width:'100%', paddingTop:'10px', paddingLeft:'10px',}
    const [petrol,setPetrol] = useState(0);
    const [diesel, setDiesel] = useState(0);
    const [lpg, setLpg] = useState(0);
    const [taxi, setTaxi] = useState(0);
    const [bus, setBus] = useState(0);
    const [rickshaw, setRickshaw] = useState(0);
    const [train, setTrain] = useState(0);
    const [footprint,setFootprint] = useState(0);
    const [month,setMonth] = useState('');
    const [year,setYear] = useState(2022);
    const total = ()=>{
        var foot = petrol*2.327 + diesel*2.681 + lpg*3.059 + taxi*0.306 + bus*0.054 + rickshaw*0.054 + train*0.1;
        // console.log(foot);
        // alert('Your Carbon Footprint is ' + foot +' (kgs of C02)');
        setFootprint(foot);
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
    return(
    <div>
       <LoggedInNavbar></LoggedInNavbar>
        <div style={{alignItems: 'center', display:"flex", justifyContent:"center",backgroundColor:'#C6EBC5', paddingTop:'30px'}}>
        <div style={{backgroundColor:'white' ,  borderRadius: '15px', width: '65%', paddingTop:'0px', marginBottom:'30px'}}>
            <h2 style={{width:'100%',textAlign:'center', color:'#428558',padding:'30px'}}>Transportation Footprint</h2>
            <div style={{width:'90%',display:'flex',justifyContent:'space-between', paddingLeft:'30px',}}>  
            <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                    style={textStyle} onChange={ (val)=>setMonth(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                    style={textStyle}  onChange={ (val)=>setYear(val.target.value)}/>
            </div>

            <div style={{display:'flex',justifyContent:'center', alignItems:'center',overflow:'hidden',width: '90%',padding:'0px 20px'}}>
            <div className="form" style={divsStyle} >
            <CssTextField id="outlined-basic" label="Petrol (litres)" variant="outlined"
            style={textStyle }  onChange={ (val)=>setPetrol(val.target.value)}
            />
            <CssTextField  id="outlined-basic" label="Diesel (litres)" variant="outlined" style={textStyle }
            onChange={ (val)=>setDiesel(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Auto LPG (kg)" variant="outlined"
            style={textStyle} onChange={ (val)=>setLpg(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Taxi (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setTaxi(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Local Bus (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setBus(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Auto Rickshaw (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setRickshaw(val.target.value)}/>
            <CssTextField  id="outlined-basic" label="Local Train (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setTrain(val.target.value)}/>
            <Button variant="contained" size="medium" style={btnStyle}
            onClick={total}
            >Calculate my Footprint</Button>
            </div>
           
    
               
            </div>
        </div>
        </div>
        </div>
    )
}