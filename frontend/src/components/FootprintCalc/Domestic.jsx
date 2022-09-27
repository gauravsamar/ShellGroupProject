import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';

export default function Domestic(){
    const textStyle = {color : 'blue', margin:'10px', width:'99%'};
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'99%'};
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
            <CssTextField id="outlined-basic" label="LPG Cylinder" variant="outlined"
            style={textStyle} />
            <CssTextField id="outlined-basic" label="CNG at home (m3)" variant="outlined"
            style={textStyle} />
            <CssTextField id="outlined-basic" label="Electricity (kWh)" variant="outlined"
            style={textStyle} />
            
            <Button variant="contained" size="medium" style={btnStyle}>Calculate my Footprint</Button>
        </div>
    )
}