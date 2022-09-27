import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
export default function Domestic(){
    const textStyle = {color : 'blue', margin:'10px', width:'99%'};
    const btnStyle = {background : 'blue',color:'white', margin:'10px', width:'99%'};
    return(
        <div>
            <TextField id="outlined-basic" label="LPG Cylinder" variant="outlined"
            style={textStyle} />
            <TextField id="outlined-basic" label="CNG at home (m3)" variant="outlined"
            style={textStyle} />
            <TextField id="outlined-basic" label="Electricity (1kWh)" variant="outlined"
            style={textStyle} />
            
            <Button variant="contained" size="medium" style={btnStyle}>Calculate my Footprint</Button>
        </div>
    )
}