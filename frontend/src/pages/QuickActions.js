import React from "react";
import { Link } from "react-router-dom";

export default function QuickActions(){
  return (
    <div style={{maxWidth:1200,margin:"36px auto",padding:"0 18px"}}>
      <h2 className="section-title">Quick Actions</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20,marginTop:18}}>
        <Link to="/book" className="card" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:28,textDecoration:"none"}}>
          <div style={{fontSize:20,fontWeight:800,color:"var(--primary-dark)"}}>Book a Parcel</div>
          <div style={{marginTop:6,color:"var(--muted)"}}>Start a new booking, add addresses and pay.</div>
        </Link>

        <Link to="/review" className="card" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:28,textDecoration:"none"}}>
          <div style={{fontSize:20,fontWeight:800,color:"var(--primary-dark)"}}>Review Parcel</div>
          <div style={{marginTop:6,color:"var(--muted)"}}>Leave review or check delivery feedback.</div>
        </Link>

        <Link to="/track" className="card" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:28,textDecoration:"none"}}>
          <div style={{fontSize:20,fontWeight:800,color:"var(--primary-dark)"}}>Track Parcel</div>
          <div style={{marginTop:6,color:"var(--muted)"}}>Scan QR or enter ID to get live status.</div>
        </Link>

        <a href="tel:+911123372637" className="card" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:28,textDecoration:"none"}}>
          <div style={{fontSize:20,fontWeight:800,color:"var(--primary-dark)"}}>Contact Support</div>
          <div style={{marginTop:6,color:"var(--muted)"}}>Call 011-23372637 for assistance.</div>
        </a>
      </div>
    </div>
  );
}
