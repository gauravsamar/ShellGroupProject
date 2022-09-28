import React from "react";
import {gql,useQuery} from "@apollo/client";
import { useState } from "react";

const CHECK_USER = gql`
  query check_user($email:String!){
    userByEmail(email:$email){
      uID
    }
  }
`;
function DashBoard(props) {
    // const [email,setEmail] = useState(props.email);
    const {loading,error,dat} = useQuery(CHECK_USER, {
      variables:props.email
    })
    return <p>{props.email}</p>
    // if(error)return<p>Error</p>
    // if(dat.userByEmail.length==1)return ("Form not submitted!")

    return(
        <p>Welcome user!</p>
    )
    
}

export default DashBoard;