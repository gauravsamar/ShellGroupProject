import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from "react";

export default function Transport(){
    const textStyle = {color : 'blue', margin:'10px', width:'100%', display:'flex',flexDirection:'column', marginLeft:'20px'};
    const btnStyle = {background : 'blue',color:'white', margin:'10px', width:'100%',marginLeft:'20px'};
    const divStyle = {width:'48.4%', display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'10px'}
    const [petrol,setPetrol] = useState(0);
    const [diesel, setDiesel] = useState(0);
    const [lpg, setLpg] = useState(0);
    const [taxi, setTaxi] = useState(0);
    const [bus, setBus] = useState(0);
    const [rickshaw, setRickshaw] = useState(0);
    const [train, setTrain] = useState(0);
    const [footprint,setFootprint] = useState(0);
    const total = ()=>{
        var foot = petrol*2.327 + diesel*2.681 + lpg*3.059 + taxi*0.306 + bus*0.054 + rickshaw*0.054 + train*0.1;
        // console.log(foot);
        // alert('Your Carbon Footprint is ' + foot +' (kgs of C02)');
        setFootprint(foot);
    }

    return(
        <div style={{display:'flex', alignItems:'center',overflow:'hidden'}}>
            <div className="form" style={divStyle}>
            <TextField id="outlined-basic" label="Petrol (litres)" variant="outlined"
            style={textStyle} onChange={ (val)=>setPetrol(val.target.value)}/>
            <TextField id="outlined-basic" label="Diesel (litres)" variant="outlined"
            style={textStyle} onChange={ (val)=>setDiesel(val.target.value)}/>
            <TextField id="outlined-basic" label="Auto LPG (kg)" variant="outlined"
            style={textStyle} onChange={ (val)=>setLpg(val.target.value)}/>
            <TextField id="outlined-basic" label="Taxi (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setTaxi(val.target.value)}/>
            <TextField id="outlined-basic" label="Local Bus (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setBus(val.target.value)}/>
            <TextField id="outlined-basic" label="Auto Rickshaw (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setRickshaw(val.target.value)}/>
            <TextField id="outlined-basic" label="Local Train (km)" variant="outlined"
            style={textStyle} onChange={ (val)=>setTrain(val.target.value)}/>
            <Button variant="contained" size="medium" style={btnStyle}
            onClick={total}
            >Calculate my Footprint</Button>
            </div>
            <div className="total" style={{margin:'auto',width:'50%',display:'flex',alignItems:'center'}}>
                <div style={{width:'100%',margin:'auto',position:'relative',left:'250px'}}>
                    <h2 style={{fontWeight:400}}>{footprint} kgs of C02</h2>
                </div>
            </div>
        </div>
    )
}