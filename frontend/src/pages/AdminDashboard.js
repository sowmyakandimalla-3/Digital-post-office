import React, { useState } from "react";
import Modal from "../Modal";

export default function AdminDashboard(){
  const [open,setOpen] = useState(false);
  const [parcel,setParcel] = useState("");
  const [status,setStatus] = useState("In Transit");

  function submit(e){
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div style={{maxWidth:1200,margin:"36px auto"}}>
      <div className="card">
        <h2 className="section-title">Admin Dashboard</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:16}}>
          <div className="card">
            <h4 style={{marginTop:0}}>Update Status</h4>
            <form onSubmit={submit} style={{display:"grid",gap:8}}>
              <input value={parcel} onChange={e=>setParcel(e.target.value)} placeholder="Parcel ID" />
              <select value={status} onChange={e=>setStatus(e.target.value)} style={{padding:8,borderRadius:6}}>
                <option>In Transit</option>
                <option>Delivered</option>
                <option>Returned</option>
              </select>
              <button className="btn btn-primary" type="submit">Update</button>
            </form>
          </div>
          <div className="card">
            <h4 style={{marginTop:0}}>Parcel Queue</h4>
            <div style={{height:120,background:"#fafafa",borderRadius:6}}></div>
          </div>
        </div>
      </div>

      <Modal open={open} title="Update Published" onClose={()=>setOpen(false)}>
        <div style={{display:"grid",gap:8}}>
          <div style={{fontWeight:700}}>Parcel ID: {parcel}</div>
          <div>New status: {status}</div>
          <div style={{display:"flex",gap:8,marginTop:12}}>
            <button className="btn btn-primary" onClick={()=>setOpen(false)}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
