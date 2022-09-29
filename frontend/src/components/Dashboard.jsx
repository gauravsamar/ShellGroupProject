import React,{useState,useRef} from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import LineGraph from './Graph';
import LoggedInNavbar from './LoggedInNavbar';
import { Button } from '@material-ui/core';
import {gql,useMutation} from "@apollo/client";
import BarGraph from './GraphBar';

const GET_DOMESTIC = gql` 
mutation domestic($year:Int!,$uid:Int!){
    domesticFootprintByYearAndUser(year:$year,uID:$uid){
      month
      carbonDomestic
    }
  } 
`;

const GET_TRANS = gql`
mutation transport($year:Int!,$uid:Int!){
    transportFootprintByYearAndUser(year:$year,uID:$uid){
      month
      carbontransport
    }
  } 
`;

const GET_DOMMONTH = gql`
mutation domesticFootprintByYearMonthUser($year:Int!,$uid:Int!,$month:String!){
    domesticFootprintByYearMonthUser(year:$year,uID:$uid,month:$month){
      lpg
      cng
      carbonDomestic
    }
  }
`;

const GET_TRANSMONTH = gql`
mutation transportFootprintByYearMonthUser($year:Int!,$uid:Int!,$month:String!){
    transportFootprintByYearMonthUser(year:$year,uID:$uid,month:$month){
      petrol
      desiel
      taxis
      lpg
      bus
      autorickshaw
      train
      carbontransport
    }
  }
`;


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


   
    var domestic_carbon = [1,0,0,0,0,0,0,0,0,0,0,0];
    var month = ["January","Febrary","March","April","May","June","July","August","September","October","November","December"];
    var transport_carbon = [0,0,0,0,0,0,0,0,0,0,0,0];
    var total_carbon = [0,0,0,0,0,0,0,0,0,0,0,0];

    var domestic_carbon1 = [1,0,0,0,0,0,0,0,0,0,0,0];
    var transport_carbon1 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var total_carbon1= [0,0,0,0,0,0,0,0,0,0,0,0];
    //var total = [0,0,0,0,0,0,0,0,0,0,0,0];
    //var domestic_carbon = [0,0,0,0,0,0,0,0,0,0,0,0];
    var trans_x = ["petrol","desiel","taxis","lpg","bus","autorickshaw","train","total"];
    var dom_x=["lpg","cng","total"];
    //const[domestic_carbon,setdomestic_carbon] = useState([{ type: 0 }]);
    const [getdomestic]= useMutation(GET_DOMESTIC);
    const [gettransport]= useMutation(GET_TRANS);
    const [getdomesticmonth]= useMutation(GET_DOMMONTH);
    const [gettransportmonth]= useMutation(GET_TRANSMONTH);
    var domestic_bymonth = [0,0,0];
    var trans_bymonth=[0,0,0,0,0,0,0,0];
    const uid = Number(sessionStorage.getItem("uid"));
    
    const [inputs, setInputs] = useState();
    const [monthinp, setmonthinp] = useState("May");
    const [year, setyear] = useState(2021);

    const handleSubmit = (event) => {
    event.preventDefault();
    const inp = new FormData(event.currentTarget);
    setInputs(Number(inp.get('year')));
    console.log("inp",Number(inp.get('year')));
    console.log("hope",inputs);

    
    getdomestic({variables:{
        "year":Number(inp.get('year')),
        "uid":uid
    }
    })
    .then(data => {
        let results = data.data.domesticFootprintByYearAndUser;
        results.map( result => {
            
            console.log(result.month);
            console.log(result.carbonDomestic);
        
            switch(result.month) {
 
                case 'January':
                console.log("jan called");
                domestic_carbon.splice(0,1,result.carbonDomestic);
                console.log(domestic_carbon[0]);
                
                
                break;
                case 'Febuary':
                    
                    console.log("feb called");
                domestic_carbon.splice(1,1,result.carbonDomestic);
                console.log(domestic_carbon[1]);
                  break;
           
                case 'March':
                    console.log("march called");
                   
                    
                domestic_carbon.splice(2,1,result.carbonDomestic);
                console.log(domestic_carbon[2]);
                  break;
           
                case 'April':
                    console.log("apr called");
                    
                 domestic_carbon.splice(3,1,result.carbonDomestic);
                console.log(domestic_carbon[3]);
                  break;

                case 'May':
                    console.log("may called");
                   
                    domestic_carbon.splice(4,1,result.carbonDomestic);
                console.log(domestic_carbon[4]);
                break;
                case 'June':
                    console.log("june called");
                    
                    domestic_carbon.splice(5,1,result.carbonDomestic);
                console.log(domestic_carbon[5]);
                break;
                
                case 'July':
                    console.log("july called");
                    
                    domestic_carbon.splice(6,1,result.carbonDomestic);
                console.log(domestic_carbon[6]);
                break;

                case 'August':
                    console.log("aug called");
                 
                    domestic_carbon.splice(7,1,result.carbonDomestic);
                console.log(domestic_carbon[7]);
                break;

                case 'September':
                    console.log("sept called");
                
                    domestic_carbon.splice(8,1,result.carbonDomestic);
                console.log(domestic_carbon[8]);
                break;

                case 'October':
                    console.log("oct called");
                    
                    domestic_carbon.splice(9,1,result.carbonDomestic);
                console.log(domestic_carbon[9]);
                    break;
                case 'November':
                    console.log("nov called");
                    
                    domestic_carbon.splice(10,1,result.carbonDomestic);
                console.log(domestic_carbon[10]);
                    break;

                case 'December':
                    console.log("dec called");
                    
                    domestic_carbon.splice(11,1,result.carbonDomestic);
                console.log(domestic_carbon[11]);
                    break;
            
              
                }    
            
       })
       console.log("domestic carbon",domestic_carbon);
})
.catch(err => {
    console.log(err);
  })


  gettransport({variables:{
    "year":Number(inp.get('year')),
    "uid":uid
}
})
.then(data => {
    let result_trans = data.data.transportFootprintByYearAndUser;

    result_trans.map( result => {
        console.log(result.month);
        console.log(result.carbontransport);

        switch(result.month) {
 
            case 'January':
                console.log("jan called");
                transport_carbon.splice(0,1,result.carbontransport);
                console.log(transport_carbon[0]);
              break;
            case 'Febrary':
                console.log("feb called");
                transport_carbon.splice(1,1,result.carbontransport);
                console.log(transport_carbon[1]);
              break;
       
            case 'March':
                console.log("march called");
                transport_carbon.splice(2,1,result.carbontransport);
                console.log(transport_carbon[2]);
              break;
       
            case 'April':
                console.log("apr called");
                transport_carbon.splice(3,1,result.carbontransport);
                console.log(transport_carbon[3]);
              break;

            case 'May':
                console.log("may called");
                transport_carbon.splice(4,1,result.carbontransport);
                console.log(transport_carbon[4]);
            break;
            case 'June':
                console.log("june called");
                transport_carbon.splice(5,1,result.carbontransport);
                console.log(transport_carbon[5]);
            break;
            
            case 'July':
                console.log("july called");
                transport_carbon.splice(6,1,result.carbontransport);
                console.log(transport_carbon[6]);
            break;

            case 'August':
                console.log("aug called");
                transport_carbon.splice(7,1,result.carbontransport);
                console.log(transport_carbon[7]);
            break;

            case 'September':
                console.log("sept called");
                transport_carbon.splice(8,1,result.carbontransport);
                console.log(transport_carbon[8]);
            break;

            case 'October':
                console.log("oct called");
                transport_carbon.splice(9,1,result.carbontransport);
                console.log(transport_carbon[9]);
                break;
            case 'November':
                console.log("nov called");
                transport_carbon.splice(10,1,result.carbontransport);
                console.log(transport_carbon[10]);
                break;

            case 'December':
                console.log("dec called");
                transport_carbon.splice(11,1,result.carbontransport);
                console.log(transport_carbon[11]);
                break;
            }      
   })
   console.log(domestic_carbon);
   console.log(transport_carbon);
   for(var i=0;i<12;i++){
    total_carbon[i] = Number(transport_carbon[i])+Number(domestic_carbon[i]);
   }
   sessionStorage.setItem('transport_carbon', JSON.stringify(transport_carbon));
   sessionStorage.setItem('domestic_carbon', JSON.stringify(domestic_carbon));
   sessionStorage.setItem('total_carbon', JSON.stringify(total_carbon));
})
.catch(err => {
console.log(err);
})

}


const handlemonth = (e) => {
    e.preventDefault();
    const vals = new FormData(e.currentTarget);
    getdomestic({variables:{
        "year":Number(vals.get('year')),
        "uid":uid
    }
    })
    .then(data => {
        let results = data.data.domesticFootprintByYearAndUser;
        results.map( result => {
            
            console.log(result.month);
            console.log(result.carbonDomestic);
        
            switch(result.month) {
 
                case 'January':
                console.log("jan called");
                domestic_carbon1.splice(0,1,result.carbonDomestic);
                console.log(domestic_carbon1[0]);
                
                
                break;
                case 'Febuary':
                    
                    console.log("feb called");
                domestic_carbon1.splice(1,1,result.carbonDomestic);
                console.log(domestic_carbon1[1]);
                  break;
           
                case 'March':
                    console.log("march called");
                   
                    
                domestic_carbon1.splice(2,1,result.carbonDomestic);
                console.log(domestic_carbon1[2]);
                  break;
           
                case 'April':
                    console.log("apr called");
                    
                 domestic_carbon1.splice(3,1,result.carbonDomestic);
                console.log(domestic_carbon1[3]);
                  break;

                case 'May':
                    console.log("may called");
                   
                    domestic_carbon1.splice(4,1,result.carbonDomestic);
                console.log(domestic_carbon1[4]);
                break;
                case 'June':
                    console.log("june called");
                    
                    domestic_carbon1.splice(5,1,result.carbonDomestic);
                console.log(domestic_carbon1[5]);
                break;
                
                case 'July':
                    console.log("july called");
                    
                    domestic_carbon1.splice(6,1,result.carbonDomestic);
                console.log(domestic_carbon1[6]);
                break;

                case 'August':
                    console.log("aug called");
                 
                    domestic_carbon1.splice(7,1,result.carbonDomestic);
                console.log(domestic_carbon1[7]);
                break;

                case 'September':
                    console.log("sept called");
                
                    domestic_carbon1.splice(8,1,result.carbonDomestic);
                console.log(domestic_carbon1[8]);
                break;

                case 'October':
                    console.log("oct called");
                    
                    domestic_carbon1.splice(9,1,result.carbonDomestic);
                console.log(domestic_carbon1[9]);
                    break;
                case 'November':
                    console.log("nov called");
                    
                    domestic_carbon1.splice(10,1,result.carbonDomestic);
                console.log(domestic_carbon1[10]);
                    break;

                case 'December':
                    console.log("dec called");
                    
                    domestic_carbon1.splice(11,1,result.carbonDomestic);
                console.log(domestic_carbon1[11]);
                    break;
            
              
                }    
            
       })
       console.log("domestic carbon1",domestic_carbon1);
})
.catch(err => {
    console.log(err);
  })


  gettransport({variables:{
    "year":Number(vals.get('year')),
    "uid":uid
}
})
.then(data => {
    let result_trans = data.data.transportFootprintByYearAndUser;

    result_trans.map( result => {
        console.log(result.month);
        console.log(result.carbontransport);

        switch(result.month) {
 
            case 'January':
                console.log("jan called");
                transport_carbon1.splice(0,1,result.carbontransport);
                console.log(transport_carbon1[0]);
              break;
            case 'Febrary':
                console.log("feb called");
                transport_carbon1.splice(1,1,result.carbontransport);
                console.log(transport_carbon1[1]);
              break;
       
            case 'March':
                console.log("march called");
                transport_carbon1.splice(2,1,result.carbontransport);
                console.log(transport_carbon1[2]);
              break;
       
            case 'April':
                console.log("apr called");
                transport_carbon1.splice(3,1,result.carbontransport);
                console.log(transport_carbon1[3]);
              break;

            case 'May':
                console.log("may called");
                transport_carbon1.splice(4,1,result.carbontransport);
                console.log(transport_carbon1[4]);
            break;
            case 'June':
                console.log("june called");
                transport_carbon1.splice(5,1,result.carbontransport);
                console.log(transport_carbon1[5]);
            break;
            
            case 'July':
                console.log("july called");
                transport_carbon1.splice(6,1,result.carbontransport);
                console.log(transport_carbon1[6]);
            break;

            case 'August':
                console.log("aug called");
                transport_carbon1.splice(7,1,result.carbontransport);
                console.log(transport_carbon1[7]);
            break;

            case 'September':
                console.log("sept called");
                transport_carbon1.splice(8,1,result.carbontransport);
                console.log(transport_carbon1[8]);
            break;

            case 'October':
                console.log("oct called");
                transport_carbon1.splice(9,1,result.carbontransport);
                console.log(transport_carbon1[9]);
                break;
            case 'November':
                console.log("nov called");
                transport_carbon1.splice(10,1,result.carbontransport);
                console.log(transport_carbon1[10]);
                break;

            case 'December':
                console.log("dec called");
                transport_carbon1.splice(11,1,result.carbontransport);
                console.log(transport_carbon1[11]);
                break;
            }      
   })
   console.log(domestic_carbon1);
   console.log(transport_carbon1);
   for(var i=0;i<12;i++){
    total_carbon1[i] = Number(transport_carbon1[i])+Number(domestic_carbon1[i]);
   }
   sessionStorage.setItem('transport_carbon1', JSON.stringify(transport_carbon1));
   sessionStorage.setItem('domestic_carbon1', JSON.stringify(domestic_carbon1));
   sessionStorage.setItem('total_carbon1', JSON.stringify(total_carbon1));
})
.catch(err => {
console.log(err);
})
    
}

    return(
        
        <div className="body" style={bodyStyle}>
            <LoggedInNavbar/>
            <h3 style={{width:'100%',textAlign:'center',marginLeft:'10px',marginTop:'10px',color:'#428558'}}>Dashboard</h3>
            <div className="content" style={contentStyle}>
                <div className="total" style={totalStyle}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="fields" style={{display:'flex',justifyContent:'space-evenly',width:'80%',marginLeft:'50px',marginTop:'30px'}}>
                        <CssTextField id="year" label="Year" name="year" variant="outlined"  style={textStyle} />
                        <Button variant="contained" size="medium" style={btnStyle} type ="submit">Calculate </Button>
                        </div> 
                    </div>
                    </form>
                    <div className="graph">
                        <LineGraph height="400" width="500" title="Total" x={month} y1={transport_carbon} y2={[2,2,2,2,2,2,2,2,2,2,2,2,2]} y3={[3,3,3,3,3,3,3,3,3,3,3,3]} />
                    </div>
                    
                </div>
                <div className="single" style={singleStyle}>
                <form onSubmit={handlemonth}>
                    <div>
                    <div className="fields" style={{display:'flex',justifyContent:'space-evenly',width:'80%',marginLeft:'50px',marginTop:'30px'}}>
                        <CssTextField id="year" label="Year" name="year" variant="outlined"  style={textStyle} />
                        <Button variant="contained" size="medium" style={btnStyle} type ="submit">Calculate </Button>
                        </div> 
                    </div>
                    </form>
                    <BarGraph height="300" width="500" title="Transport" x={month} y = {JSON.parse(sessionStorage.getItem('transport_carbon1'))} name="transport"/>
                    <BarGraph height="300" width="500" title="Domestic" x={month}  y = {JSON.parse(sessionStorage.getItem('domestic_carbon1'))} name="domestic"/>
                </div>
                
            </div>
        </div>
    )
}