import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export default function IShopRegister()
{
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            userId:'',
            userName:'',
            password:'',
            age:0,
            mobile:'',
            subscribed:true,
        },
        onSubmit : values => {
            axios.post("http://localhost:2000/api/registeruser",values);
            alert("Registered Successfully");
            navigate("/login");
        }
    })
    
    return(
        <div>
            <h2>Register New User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" value={formik.values.userId} onChange={formik.handleChange} name="userId" /></dd>
                    
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.userName} onChange={formik.handleChange} name="userName"/></dd>

                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.password} onChange={formik.handleChange} name="password"/></dd>

                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.age} onChange={formik.handleChange} name="age"/></dd>

                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.mobile} onChange={formik.handleChange} name="mobile"/></dd>
                    
                    <dt>Subscription</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.subscribed} onChange={formik.handleChange}  name="subscribed"/> Yes </dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <br />
                <Link to="/login">Already have account?</Link>
            </form>
        </div>
    )
}