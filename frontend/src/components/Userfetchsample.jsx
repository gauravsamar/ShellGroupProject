import React from "react";
import {gql, useQuery} from "@apollo/client";

// const USERS = gql `
//     query users{
//         user{
//             id
//             email
//         }
//     }
// `;

const USERS  = gql`
    query users{
        user{
            email
            uID
        }
    }
`;

export default function Userfetchsample () {
    const {loading,error,data} = useQuery(USERS);

    if (loading) return <p>Loading Sessions..</p>;
    if(error) return <p>Error loading sessions!</p>

    return data.user.map((use) => (
        <UserItem key={use.uID} user={{...use}}/>
    ));
}
    
function UserItem(props)
{
    return <p>{props.user.email}</p>
}

