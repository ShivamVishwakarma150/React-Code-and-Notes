import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function IShopLogin()
{
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            userId:'',
            password:''
        },
        onSubmit : values => {
            for(var user of users) {
                if(user.userId==values.userId && user.password==values.password){
                    setCookie("userid", user.userId);
                    navigate("/dashboard");
                    break;
                } else {
                    navigate("/errorpage");
                }
            }
        }
    })

    useEffect(()=>{
        axios.get("http://localhost:2000/api/getusers")
            .then(response=> {
                setUsers(response.data);
            })
    },[]);

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input value={formik.values.userId} name="userId" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input  value={formik.values.password} name="password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    )
}