import React from 'react';
export default function Dashboard(){
    const bodyStyle = { width:'100%',height:'100%',backgroundColor:'lightgrey'};
    const contentStyle = { width:'95%',height:'100%',backgroundColor:'white',margin:'50px', borderRadius:'10px',display:'flex',justifyContent:"space-between"};
    const totalStyle = {width:'50%',height:'100%',textAlign:'center'};
    const singleStyle = {borderLeft:'1px solid lightgrey',width:'50%',height:'auto',textAlign:'center'};
    return(
        <div className="body" style={bodyStyle}>
            <div className="content" style={contentStyle}>
                <div className="total" style={totalStyle}>
                    <h1>Total</h1>
                    <h1>Total</h1>
                    <h1>Total</h1>
                    <h1>Total</h1>
                    <h1>Total</h1>
                    <h1>Total</h1>
                </div>
                <div className="single" style={singleStyle}>
                    <h1>Single</h1>
                </div>
            </div>
        </div>
    )
}