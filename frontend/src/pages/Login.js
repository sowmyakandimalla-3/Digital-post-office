import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [mode, setMode] = useState("user");
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    if(mode==="admin") navigate("/admin");
    else navigate("/dashboard");
  }

  return (
    <div className="card">
      <h2 className="section-title">Login to your account</h2>
      <p className="lead">Enter your credentials to continue as a user or admin.</p>
      <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:10}}>
        <div>
          <label className="small-muted">Login ID</label>
          <input type="text" value={id} onChange={e=>setId(e.target.value)} placeholder="Email or mobile" />
        </div>
        <div>
          <label className="small-muted">Password</label>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" />
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="button" className="btn btn-ghost" onClick={()=>{setId("");setPass("");}}>Clear</button>
          <div style={{marginLeft:"auto"}}>
            <button type="button" className="btn" onClick={()=>setMode(mode==="user"?"admin":"user")}>Switch to {mode==="user"?"Admin":"User"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}
