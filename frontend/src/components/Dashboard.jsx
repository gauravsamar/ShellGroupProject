import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import LineGraph from './Graph';
import LoggedInNavbar from './LoggedInNavbar';
import { Button } from '@material-ui/core';
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
    const bodyStyle = { width:'100%',height:'100%',backgroundColor:'white'};
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'40%',marginLeft:'25px', marginBottom:'40px'};
    const contentStyle = { width:'100%',height:'100%',backgroundColor:'white',margin:'5px', borderRadius:'10px',display:'flex',justifyContent:"space-between"};
    const totalStyle = {width:'50%',height:'100%',textAlign:'center',display:'flex',marginLeft:'5px',marginRight:'5px',flexDirection:'column'};
    const singleStyle = {borderLeft:'1px solid lightgrey',width:'50%',textAlign:'center'};
    const textStyle = {borderColor: "green", color : '#428558', marginBottom:'1px', width:'100%', display:'flex',flexDirection:'column', marginLeft:'20px',};
    // const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'100%',marginLeft:'25px', marginBottom:'40px'};
    // const divStyle = {width:'48.4%', display:'flex',alignItems:'center',flexDirection:'column',marginLeft:'10px'}
    return(
        
        <div className="body" style={bodyStyle}>
            <LoggedInNavbar/>
            <h3 style={{width:'100%',textAlign:'left',marginLeft:'80px',marginTop:'10px',color:'#428558'}}>Dashboard</h3>
            <div className="content" style={contentStyle}>
                <div className="total" style={totalStyle}>
                    <div>
                        <div className="fields" style={{display:'flex',justifyContent:'space-evenly',width:'80%',marginLeft:'50px',marginTop:'30px'}}>
                        <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                        style={textStyle} onChange={true}/>
                        <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                        style={textStyle} onChange={true}/>
                        </div>
                        <Button variant="contained" size="medium" style={btnStyle}>Calculate </Button>
                    </div>

                    <div className="graph">
                        <LineGraph height="400" width="500" title="Total" />
                    </div>
                </div>
                <div className="single" style={singleStyle}>
                    {/* <div>
                        <div className="fields" style={{display:'flex',justifyContent:'space-evenly',width:'80%',marginLeft:'50px'}}>
                        <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                        style={textStyle} onChange={true}/>
                        <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                        style={textStyle} onChange={true}/>
                        </div>
                        <Button variant="contained" size="medium" style={btnStyle}>Calculate </Button>
                    </div> */}
                    <LineGraph height="300" width="500" title="Transport"/>
                    <LineGraph height="300" width="500" title="Domestic"/>
                </div>
            </div>
        </div>
    )
}