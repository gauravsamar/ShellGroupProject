import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import LineGraph from './Graph';
export default function Dashboard(){
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
    const bodyStyle = { width:'100%',height:'100%',backgroundColor:'lightgrey'};
    const contentStyle = { width:'95%',height:'100%',backgroundColor:'white',margin:'50px', borderRadius:'10px',display:'flex',justifyContent:"space-between"};
    const totalStyle = {width:'50%',height:'100%',textAlign:'center',display:'flex',margin:'5px',flexDirection:'column'};
    const singleStyle = {borderLeft:'1px solid lightgrey',width:'50%',height:'auto',textAlign:'center'};
    const textStyle = {borderColor: "green", color : '#428558', marginBottom:'12px', width:'100%', display:'flex',flexDirection:'column', marginLeft:'20px',};
    // const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'100%',marginLeft:'25px', marginBottom:'40px'};
    // const divStyle = {width:'48.4%', display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'10px'}
    return(
        <div className="body" style={bodyStyle}>
            <div className="content" style={contentStyle}>
                <div className="total" style={totalStyle}>
                    <div className="fields" style={{display:'flex',justifyContent:'space-between',}}>
                        <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                        style={textStyle} onChange={true}/>
                        <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                        style={textStyle} onChange={true}/>
                    </div>
                    <br />
                    <div className="graph">
                        <LineGraph/>
                    </div>
                </div>
                <div className="single" style={singleStyle}>
                    <LineGraph/>
                    <LineGraph/>
                </div>
            </div>
        </div>
    )
}