import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [role,setRole] = useState("user");
  const [empId,setEmpId] = useState("");
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    if(!name || !email || !phone) return alert("Please fill all required fields");
    if(role==="admin" && !empId) return alert("Admin must provide employee id");
    const users = JSON.parse(localStorage.getItem("ePost_users") || "[]");
    users.push({ name, email, phone, role, empId });
    localStorage.setItem("ePost_users", JSON.stringify(users));
    alert("Registration successful");
    navigate("/login");
  }

  return (
    <div style={{maxWidth:700,margin:"36px auto"}}>
      <div className="card">
        <h2 className="section-title">Register</h2>
        <form onSubmit={submit} style={{display:"grid",gap:12}}>
          <input type="text" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
          <select value={role} onChange={e=>setRole(e.target.value)} style={{padding:10,borderRadius:6}}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {role==="admin" && <input type="text" placeholder="Employee ID (required for admin)" value={empId} onChange={e=>setEmpId(e.target.value)} />}
          <div style={{display:"flex",gap:10}}>
            <button className="btn btn-primary" type="submit">Create account</button>
            <button type="button" className="btn btn-ghost" onClick={()=>{setName("");setEmail("");setPhone("");setEmpId("");setRole("user");}}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}
