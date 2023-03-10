import { useFormik } from "formik";

export default function FormikValidation()
{
    function VerifyUserDetails(userDetails)
    {
        const errors = {};
        if(userDetails.UserName==""){
            errors.UserName = "User Name Required";
        } else if(userDetails.UserName.length<4){
            errors.UserName = "Name too short..";
        } else if(userDetails.UserName.length>10){
            errors.UserName = "Name too long..";
        }

        if(userDetails.Age=="") {
            errors.Age = "Age Required";
        } else if(isNaN(userDetails.Age)){
            errors.Age = "Age must be a Number";
        }

        if(userDetails.Email=="") {
            errors.Email = "Email Required";
        }else if(userDetails.Email.indexOf("@")<=2) {
            errors.Email = "Invalid Email";
        }

        if(userDetails.Mobile=="") {
            errors.Mobile = "Mobile Required";
        }
        else if(userDetails.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = "";
        } else {
            errors.Mobile = "Invalid Mobile"
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email:'',
            Mobile:''
        },
        validate: VerifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name="Age" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input name="Email" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}





































































































// import { useFormik } from "formik";

// export default function FormikValidation() {
//   function VerifyUserDetails(userDetails) {
//     const errors = {};
//     if (userDetails.UserName == "") {
//       errors.UserName = "User Name Required";
//     }
//     if (userDetails.Age == "") {
//       errors.Age = "Age Required";
//     }
//     if (userDetails.Email == "") {
//       errors.Email = "Email Required";
//     }
//     return errors;
//   }
//   const formik = useFormik({
//     initialValues: {
//       UserName: "",
//       Age: 0,
//       Email: "",
//     },
//     validate: VerifyUserDetails,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values));
//     },
//   });
//   return (
//     <div className="container-fluid">
//       <form onSubmit={formik.handleSubmit}>
//         <h2>Register User</h2>
//         <dl>
//           <dt>User Name</dt>
//           <dd>
//             <input name="UserName" onChange={formik.handleChange} type="text" />
//           </dd>
//           <dd className="text-danger">{formik.errors.UserName}</dd>
//           <dt>Age</dt>
//           <dd>
//             <input name="Age" onChange={formik.handleChange} type="text" />
//           </dd>
//           <dd className="text-danger">{formik.errors.Age}</dd>
//           <dt>Email</dt>
//           <dd>
//             <input name="Email" type="email" onChange={formik.handleChange}  />
//           </dd>
//           <dd className="text-danger">{formik.errors.Email}</dd>
//         </dl>
//         <button>Register</button>
//       </form>
//     </div>
//   );
// }
















































// import { useFormik } from "formik";

// export default function FormikValidation() {

//   function ValidateUser(userDetails) {
//     const errors = {};
//     if (userDetails.UserName == "") {
//       errors.UserName = "User Name Required";
//     }
//     if (userDetails.Mobile.match(/\+91\d{10}/)) {
//       errors.Mobile = "";
//     } else {
//       errors.Mobile = "Invalid Mobile";
//     }
//     return errors;
//   }

//   const formik = useFormik({
//     initialValues: {
//       UserName: "",
//       Mobile: "",
//     },
//     validate: ValidateUser,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values));
//     },
//   });
//   return (
//     <div className="container-fluid">
//       <h2>Register User</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <dl>
//           <dt>User Name</dt>
//           <dd>
//             <input
//               name="UserName"
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               type="text"
//             />
//           </dd>
//           <dd className="text-danger">{formik.errors.UserName}</dd>
//           <dt>Mobile</dt>
//           <dd>
//             <input name="Mobile" onChange={formik.handleChange} type="text" />
//           </dd>
//           <dd className="text-danger">{formik.errors.Mobile}</dd>
//         </dl>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
