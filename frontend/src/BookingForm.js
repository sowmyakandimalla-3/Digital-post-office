import React, { useState } from "react";
import confetti from "canvas-confetti";
import Modal from "./Modal";
import QRScanner from "./components/QRScanner";
import SupportPopup from "./components/SupportPopup";

export default function BookingForm(){
  const [sender,setSender] = useState("");
  const [recipient,setRecipient] = useState("");
  const [origin,setOrigin] = useState("");
  const [destination,setDestination] = useState("");
  const [open,setOpen] = useState(false);
  const [scanOpen,setScanOpen] = useState(false);
  const [supportOpen,setSupportOpen] = useState(false);
  const [lastBooking,setLastBooking] = useState(null);
  const [trackId,setTrackId] = useState("");
  const [showTrackModal,setShowTrackModal] = useState(false);

  function triggerConfetti(){
    confetti({ particleCount:120, spread:120, origin:{ y:0.6 } });
  }

  function submit(e){
    e.preventDefault();
    const payload = { sender, recipient, origin, destination, id: Date.now().toString().slice(-6) };
    setLastBooking(payload);
    setSender(""); setRecipient(""); setOrigin(""); setDestination("");
    setOpen(true);
    setTimeout(()=>triggerConfetti(),150);
  }

  function onScanResult(text){
    if(!text) return;
    setScanOpen(false);
    setTrackId(text);
    setShowTrackModal(true);
  }

  function openSupport(){ setSupportOpen(true); }

  return (
    <div style={{maxWidth:1100,margin:"30px auto"}}>
      <div className="card" style={{display:"grid",gridTemplateColumns:"1fr 420px",gap:28,padding:0}}>
        <form onSubmit={submit} style={{padding:22}}>
          <h2 style={{marginTop:0,color:"var(--primary-dark)"}}>Book Parcel</h2>
          <input type="text" placeholder="Sender name" value={sender} onChange={e=>setSender(e.target.value)} />
          <input type="text" placeholder="Recipient name" value={recipient} onChange={e=>setRecipient(e.target.value)} />
          <div style={{display:"flex",gap:12}}>
            <input type="text" placeholder="Origin" value={origin} onChange={e=>setOrigin(e.target.value)} />
            <input type="text" placeholder="Destination" value={destination} onChange={e=>setDestination(e.target.value)} />
          </div>
          <div style={{display:"flex",gap:10,marginTop:6}}>
            <button className="btn btn-primary" type="submit">Book Parcel</button>
            <button type="button" className="btn btn-ghost" onClick={()=>{setSender("");setRecipient("");setOrigin("");setDestination("");}}>Reset</button>
            <button type="button" className="btn btn-ghost" onClick={()=>setScanOpen(true)}>Scan QR</button>
            <button type="button" className="btn btn-ghost" onClick={openSupport}>Support</button>
          </div>
        </form>

        <div style={{padding:22}}>
          <h3 style={{marginTop:0}}>Track Parcel</h3>
          <input value={trackId} onChange={e=>setTrackId(e.target.value)} type="text" placeholder="Enter parcel ID or scan QR" />
          <div style={{display:"flex",gap:10,marginTop:12}}>
            <button className="btn btn-primary" onClick={()=>setShowTrackModal(true)}>Track</button>
            <button className="btn btn-ghost" onClick={()=>{setTrackId("");}}>Clear</button>
            <button className="btn btn-ghost" onClick={()=>setScanOpen(true)}>Scan QR</button>
          </div>

          <div style={{marginTop:22}}>
            <h4 style={{marginBottom:6}}>Live Activity</h4>
            <div style={{height:120,background:"linear-gradient(180deg,#fff,#fbf8ff)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}}>No recent activity</div>
          </div>
        </div>
      </div>

      <Modal open={open} title="Booking Confirmed" onClose={()=>setOpen(false)}>
        {lastBooking ? (
          <div style={{display:"grid",gap:8}}>
            <div style={{fontWeight:700}}>Booking ID: {lastBooking.id}</div>
            <div>Sender: {lastBooking.sender}</div>
            <div>Recipient: {lastBooking.recipient}</div>
            <div>Route: {lastBooking.origin} → {lastBooking.destination}</div>
            <div style={{display:"flex",gap:8,marginTop:12}}>
              <button className="btn btn-primary" onClick={()=>setOpen(false)}>OK</button>
            </div>
          </div>
        ) : null}
      </Modal>

      <Modal open={scanOpen} title="QR Scanner" onClose={()=>setScanOpen(false)}>
        <QRScanner onResult={onScanResult} onClose={()=>setScanOpen(false)} />
      </Modal>

      <SupportPopup open={supportOpen} onClose={()=>setSupportOpen(false)} />

      <Modal open={showTrackModal} title="Parcel Details" onClose={()=>setShowTrackModal(false)}>
        <div style={{display:"grid",gap:8}}>
          <div style={{fontWeight:700}}>Parcel: {trackId}</div>
          <div>Status: Not available in demo</div>
          <div>Last update: -</div>
          <div style={{display:"flex",gap:8,marginTop:12}}>
            <button className="btn btn-primary" onClick={()=>setShowTrackModal(false)}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
