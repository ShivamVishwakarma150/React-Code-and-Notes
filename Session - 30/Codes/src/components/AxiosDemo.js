import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosDemo()
{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then(function(response){
            setUsers(response.data);
        }).catch(function(ex){
            console.log(ex);
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>Users</h2>
            <ol>
                {
                    users.map(user=>
                        <li key={user.id}>{user.title}</li>
                        )
                }
            </ol>
        </div>
    )
}