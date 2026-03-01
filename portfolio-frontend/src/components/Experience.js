import {useEffect,useState} from "react";
import axios from "axios";

function Experience(){

 const user =
 JSON.parse(localStorage.getItem("user"));

 const [data,setData]=useState([]);

 const load=()=>{
  axios.get(
   `http://localhost:8080/experience/${user.id}`
  ).then(res=>setData(res.data));
 };

 useEffect(()=>{load();},[user.id]);

 const del=(id)=>{
  axios.delete(
   `http://localhost:8080/experience/${id}`
  ).then(load);
 };

 return(
 <>
 <h4 className="mb-3">
  Experience Timeline
 </h4>

 {data.map(exp=>(
 <div
 key={exp.id}
 className="card mb-3 shadow-sm border-0">

  <div className="card-body">

   <h5 className="fw-bold">
    {exp.company}
   </h5>

   <p className="text-muted">
    {exp.role}
   </p>

   <button
    className="btn btn-outline-danger btn-sm"
    onClick={()=>del(exp.id)}>
    Delete
   </button>

  </div>

 </div>
 ))}
 </>
 );
}

export default Experience;