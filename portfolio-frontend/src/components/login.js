import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(){

 const navigate=useNavigate();

 const [user,setUser]=useState({
  email:"",
  password:""
 });

 const login = () => {

 axios.post(
  "http://localhost:8080/auth/login",
  user
 )
 .then(res=>{

 localStorage.setItem(
  "user",
  JSON.stringify(res.data)
 );

 if(res.data.role==="ADMIN"){
   window.location="/admin";
 } else {
   window.location="/dashboard";
 }

})
 .catch(err=>{
   console.log(err);
   alert("Invalid Email or Password");
 });
};
 return(
 <div className="container mt-5">

 <h2>Login</h2>

 <input className="form-control mb-2"
 placeholder="Email"
 onChange={e=>setUser({...user,email:e.target.value})}/>

 <input type="password"
 className="form-control mb-2"
 placeholder="Password"
 onChange={e=>setUser({...user,password:e.target.value})}/>

 <button className="btn btn-success"
 onClick={login}>
 Login
 </button>

 <p className="mt-3">
 New User?
 <a href="/register"> Register</a>
 </p>

 </div>
 );
}

export default Login;