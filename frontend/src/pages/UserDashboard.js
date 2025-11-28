import React from "react";
import { Link } from "react-router-dom";

export default function UserDashboard(){
  return (
    <div style={{maxWidth:1200,margin:"36px auto"}}>
      <div className="card">
        <h2 className="section-title">User Dashboard</h2>
        <p className="small-muted">Welcome back.</p>
        <div style={{display:"flex",gap:16,marginTop:12,flexWrap:"wrap"}}>
          <Link to="/dashboard/quick-actions" className="btn btn-primary" style={{padding:"18px 28px",fontSize:18,fontWeight:800}}>Open Quick Actions</Link>
          <Link to="/book" className="btn btn-ghost" style={{padding:"18px 28px",fontSize:18,fontWeight:700}}>Book Parcel</Link>
          <Link to="/track" className="btn btn-ghost" style={{padding:"18px 28px",fontSize:18,fontWeight:700}}>Track Parcel</Link>
        </div>
      </div>
    </div>
  );
}
