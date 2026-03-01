import {useEffect,useState} from "react";
import axios from "axios";

function AdminDashboard(){

 const user =
 JSON.parse(localStorage.getItem("user"));

 const [users,setUsers]=useState([]);
 const [exp,setExp]=useState([]);

 useEffect(()=>{

  axios.get(
   "http://localhost:8080/admin/users"
  ).then(res=>setUsers(res.data));

  axios.get(
   "http://localhost:8080/admin/experiences"
  ).then(res=>setExp(res.data));

 },[]);

 const deleteUser=(id)=>{
  axios.delete(
   `http://localhost:8080/admin/users/${id}`
  ).then(()=>{
   window.location.reload();
  });
 };

 if(user.role!=="ADMIN"){
  return <h3>Access Denied</h3>;
 }

 return(
 <div className="container mt-4">

 <h2 className="mb-4">
  Admin Panel 👑
 </h2>

 {/* USERS */}
 <h4>All Users</h4>

 {users.map(u=>(
 <div key={u.id}
 className="card p-2 mb-2">

  <strong>{u.name}</strong>
  <span>{u.email}</span>

  <button
   className="btn btn-danger btn-sm mt-2"
   onClick={()=>deleteUser(u.id)}>
   Delete
  </button>

 </div>
 ))}

 {/* EXPERIENCES */}
 <h4 className="mt-5">
  All Experiences
 </h4>

 {exp.map(e=>(
 <div key={e.id}
 className="card p-2 mb-2">

  <strong>{e.company}</strong>
  <span>{e.role}</span>

 </div>
 ))}

 </div>
 );
}

export default AdminDashboard;