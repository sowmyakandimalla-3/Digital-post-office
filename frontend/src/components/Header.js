import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <img src="/logo.png" alt="logo" />
        <div>
          <h1>E-Post Office</h1>
          <div className="tag">Digital Postal Solutions for India</div>
        </div>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book" style={{marginLeft:8}}>Book Parcel</Link>
        <Link to="/contact" style={{marginLeft:8}}>Contact</Link>
        <Link to="/login" className="btn btn-primary" style={{marginLeft:12, background:"#6d4fa3", color:"#fff"}}>Portal Login</Link>
      </nav>
    </header>
  );
}
