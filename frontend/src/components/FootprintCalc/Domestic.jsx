
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import LoggedInNavbar from '../LoggedInNavbar';
import {gql,useQuery,useMutation} from "@apollo/client";
import {ApolloClient , ApolloProvider , HttpLink, InMemoryCache} from "@apollo/client";
import { useNavigate } from 'react-router-dom';

const CREATE_DOMESTIC = gql`
mutation createdomestic($domestic:domesticInput!){
    createDomestic(domestic:$domestic){
      dID
    }
  }
`;

export default function Domestic(){

    const navigate = useNavigate();

    const client  = new ApolloClient({
        cache : new InMemoryCache(),
        link: new HttpLink({
          uri : "https://localhost:5001/graphql" //for consuming the graphql api
        }),
        credentials : "same-origin"
      })

    const email = window.sessionStorage.getItem("email");
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
        // console.log(result.data.userByEmail[0].uID);
        console.log(result);
        setUserid(result.data.userByEmail[0].uID);
    }).catch(err=>console.log(err));

    const textStyle = {color : 'blue', margin:'10px', width:'88%', marginLeft:'40px'};
    const textStyles = {color : 'blue', margin:'10px', width:'90%'};
    const btnStyle = {background : '#428558',color:'white', margin:'10px', width:'88%', marginLeft:'40px'};
    // const [month,setMonth] = useState('');
    // const [year,setYear] = useState(2022);

    // const [lpg, setlpg] = useState(0);
    // const [cng, settaxi] = useState(0);
    // const [elec, setbus] = useState(0);

    

    const [addDomestic] = useMutation(CREATE_DOMESTIC);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let values = {
            "month": data.get('month'),
            "year": data.get('year'),
            "lpg":data.get('lpg'),
            "cng":data.get('cng'),
            "electricity":data.get('electricity')
        }

        const res = parseFloat(values.lpg)*42.5 + parseFloat(values.cng)*1.82 + parseFloat(values.electricity)*0.9;

        let datain = {
            "month":values.month,
            "year":parseInt(values.year),
            "lpg":parseFloat(values.lpg),
            "cng":parseFloat(values.cng),
            "electricity":parseFloat(values.electricity),
            "carbondomestic":parseFloat(res)

        }
        // uID = parseInt(uID);
        datain={uID,...datain};
        addDomestic({variables:{domestic:datain}})
        .then(data => {
            console.log("User domestic added");
            navigate("/home");
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
        <div style={{alignItems: 'center', display:"flex", justifyContent:"center",backgroundColor:'#C6EBC5',paddingTop:'30px', paddingBottom:'40px'}}>
        <div style={{backgroundColor:'white' , borderRadius: '15px', width: '65%', padding:'20px', paddingRight:'30px' }}>
        <h2 style={{width:'100%',textAlign:'center', color:'#428558', marginTop:'20px'
    , marginBottom:'30px'}}>Domestic Footprint</h2>
        <div style={{width:'94%',display:'flex',justifyContent:'space-between', paddingLeft:'30px',}}>  
            <CssTextField  id="outlined-basic" label="Month" variant="outlined"
                    style={textStyles} name="month"/>
            <CssTextField  id="outlined-basic" label="Year" variant="outlined"
                    style={textStyles}  name="year"/>
            </div>
            <CssTextField id="outlined-basic" label="LPG Cylinder" variant="outlined"
            style={textStyle} name="lpg"/>
            <CssTextField id="outlined-basic" label="CNG at home (m3)" variant="outlined"
            style={textStyle} name="cng"/>
            <CssTextField id="outlined-basic" label="Electricity (kWh)" variant="outlined"
            style={textStyle} name="electricity" />
            {/* <Button variant="contained" size="medium" style={btnStyle} >Calculate my Footprint</Button> */}
            <input type="submit" value="Submit" style={btnStyle} variant="contained" size="medium"></input>
        </div>
    </div>
    </form>
    </div>
    )
}