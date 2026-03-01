import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register(){

 const navigate=useNavigate();

 const [user,setUser]=useState({
  name:"",
  email:"",
  password:""
 });

 const register=()=>{

  axios.post(
   "http://localhost:8080/auth/register",
   user
  )
  .then(()=>{
   alert("Registered Successfully");
   navigate("/");
  })
  .catch(()=>alert("Error"));
 };

 return(
 <div className="container mt-5">

 <h2>Register</h2>

 <input className="form-control mb-2"
 placeholder="Name"
 onChange={e=>setUser({...user,name:e.target.value})}/>

 <input className="form-control mb-2"
 placeholder="Email"
 onChange={e=>setUser({...user,email:e.target.value})}/>

 <input type="password"
 className="form-control mb-2"
 placeholder="Password"
 onChange={e=>setUser({...user,password:e.target.value})}/>

 <button className="btn btn-dark"
 onClick={register}>
 Register
 </button>

 </div>
 );
}

export default Register;