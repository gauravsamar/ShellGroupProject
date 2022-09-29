import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import LoggedInNavbar from '../LoggedInNavbar';
import {gql,useQuery,useMutation} from "@apollo/client";
import {ApolloClient , ApolloProvider , HttpLink, InMemoryCache} from "@apollo/client";
import { useNavigate } from 'react-router-dom';


const CREATE_TRANSPORT = gql`
mutation createtransport($transport:transportInput!){
    createtransport(transport:$transport){
        tID
    }
}
`;

export default function Transport(){
    const navigate = useNavigate();
    const client  = new ApolloClient({
        cache : new InMemoryCache(),
        link: new HttpLink({
          uri : "https://localhost:5001/graphql" //for consuming the graphql api
        }),
        credentials : "same-origin"
      })

    const email = window.sessionStorage.
    getItem("email");
    const [uID,setUserid] = useState("");

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


    const [addTransport] = useMutation(CREATE_TRANSPORT);
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

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let values = {
            "month": data.get('month'),
            "year": data.get('year'),
            "petrol":data.get('petrol'),
            "deseil":data.get("diesel"),
            "taxis":data.get('taxi'),
            "lpg":data.get('lpg'),
            "bus":data.get('bus'),
            "train":data.get('train'),
            "autorickshaw":data.get('rickshaw')
          }
        const res = parseFloat(values.petrol)*2.327 + parseFloat(values.deseil)*2.681 + parseFloat(values.lpg)*3.059 + parseFloat(values.taxis)*0.306 + parseFloat(values.bus)*0.054 + parseFloat(values.autorickshaw)*0.054 + parseFloat(values.train)*0.1;

        let datain = {
            "month":values.month,
            "year":parseInt(values.year),
            "petrol":parseFloat(values.petrol),
            "desiel":parseFloat(values.deseil),
            "taxis":parseFloat(values.taxis),
            "lpg":parseFloat(values.lpg),
            "bus":parseFloat(values.bus),
            "train":parseFloat(values.train),
            "autorickshaw":parseFloat(values.autorickshaw),
            "carbontransport":parseFloat(res)

        }
        
        
        datain={uID,...datain};
        addTransport({variables:{transport:datain}})
        .then(data => {
            console.log("User transport added");
            navigate("/dashboard");
        })
        .catch(err => {
            console.log(err);
        })
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
       <form onSubmit={handleSubmit}>
        <div style={{alignItems: 'center', display:"flex", justifyContent:"center",backgroundColor:'#C6EBC5', paddingTop:'30px'}}>
        <div style={{backgroundColor:'white' ,  borderRadius: '15px', width: '65%', paddingTop:'0px', marginBottom:'30px'}}>
            <h2 style={{width:'100%',textAlign:'center', color:'#428558',padding:'30px'}}>Transportation Footprint</h2>
            <div style={{width:'90%',display:'flex',justifyContent:'space-between', paddingLeft:'30px',}}>  
            <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                    style={textStyle} name="month"/>
            <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                    style={textStyle} name="year" />
            </div>

            <div style={{display:'flex',justifyContent:'center', alignItems:'center',overflow:'hidden',width: '90%',padding:'0px 20px'}}>
            <div className="form" style={divStyle} style={{width:'100%', paddingLeft:'0px', paddingTop:'10px', paddingLeft:'10px'}} >
            <CssTextField id="outlined-basic" label="Petrol (litres)" variant="outlined"
            style={textStyle } name="petrol" 
            />
            <CssTextField  id="outlined-basic" label="Diesel (litres)" variant="outlined" style={textStyle }
            name="diesel"/>
            <CssTextField  id="outlined-basic" label="Auto LPG (kg)" variant="outlined"
            style={textStyle} name="lpg"/>
            <CssTextField  id="outlined-basic" label="Taxi (km)" variant="outlined"
            style={textStyle} name="taxi"/>
            <CssTextField  id="outlined-basic" label="Local Bus (km)" variant="outlined"
            style={textStyle} name="bus"/>
            <CssTextField  id="outlined-basic" label="Auto Rickshaw (km)" variant="outlined"
            style={textStyle} name="rickshaw"/>
            <CssTextField  id="outlined-basic" label="Local Train (km)" variant="outlined"
            style={textStyle}  name="train"/>
            {/* <Button variant="contained" size="medium" style={btnStyle}
            >Calculate my Footprint</Button> */}
            <input type="submit" value="Submit" style={btnStyle} variant="contained" size="medium"></input>
            </div>
               
            </div>
        </div>
        </div>
        </form>
        </div>

    )
}