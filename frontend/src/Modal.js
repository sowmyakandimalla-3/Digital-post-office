import React from "react";

export default function Modal({ open, title, children, onClose }){
  if(!open) return null;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:60}}>
      <div style={{width:520,background:"var(--card)",borderRadius:10,boxShadow:"0 12px 40px rgba(5,10,10,0.18)",overflow:"hidden"}}>
        <div style={{padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(0,0,0,0.06)"}}>
          <div style={{fontWeight:700,color:"var(--primary-dark)"}}>{title}</div>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
        <div style={{padding:18}}>{children}</div>
      </div>
    </div>
  );
}
