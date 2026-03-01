import {useState} from "react";
import axios from "axios";

function AddExperience(){

 const user =
 JSON.parse(localStorage.getItem("user"));

 const [exp,setExp]=useState({});

 const add=()=>{
  axios.post(
   `http://localhost:8080/experience/${user.id}`,
   exp
  ).then(()=>{
   window.location.reload();
  });
 };

 return(
 <>
 <h4 className="mb-3">
  Add Experience
 </h4>

 <input
 className="form-control mb-2"
 placeholder="Company"
 onChange={e=>setExp({
  ...exp,
  company:e.target.value
 })}/>

 <input
 className="form-control mb-3"
 placeholder="Role"
 onChange={e=>setExp({
  ...exp,
  role:e.target.value
 })}/>

 <button
 className="btn btn-dark w-100"
 onClick={add}>
 Add Experience
 </button>
 </>
 );
}

export default AddExperience;