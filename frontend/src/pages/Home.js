import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-brand">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:56,height:56,borderRadius:12,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",color:"#6d4fa3",fontWeight:800,fontSize:20}}>
                EP
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:16,fontWeight:700,color:"var(--hero-text)"}}>E-Post Office</div>
                <div style={{fontSize:12,opacity:0.9}}>Digital Postal Solutions for India</div>
              </div>
            </div>

            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <Link to="/contact" className="btn btn-ghost" style={{background:"transparent", color:"var(--hero-text)", border:"1px solid rgba(0,0,0,0.18)"}}>Contact</Link>
              <Link to="/login" className="btn btn-primary" style={{background:"#6d4fa3", color:"#fff"}}>Portal Login</Link>
            </div>
          </div>

          <div style={{marginTop:48,textAlign:"center"}}>
            <h1 style={{fontSize:48,lineHeight:1.05,margin:0,fontWeight:800,color:"var(--hero-text)"}}>Smart Digital Postal Services for Secure, Faster Delivery</h1>
            <p style={{maxWidth:760,margin:"18px auto 0",fontSize:16,opacity:0.95}}>
              India’s E-Post Office brings modern, AI-assisted tools that simplify parcel booking, tracking, and customer support — ensuring faster deliveries, transparent updates, and a seamless digital experience for every citizen.
            </p>
            <div className="hero-cta">
              <Link to="/book" className="btn btn-primary">Book Parcel</Link>
              <Link to="/track" className="btn btn-ghost">Track Parcel</Link>
            </div>
          </div>
        </div>
      </section>

      <main style={{maxWidth:1100,margin:"-60px auto 60px",padding:"0 18px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 420px",gap:28}}>
          <div style={{padding:0}}>
            <div className="card" style={{padding:28}}>
              <h2 style={{margin:0,fontSize:20,color:"var(--primary-dark)"}}>Create your E-Post account</h2>
              <div style={{marginTop:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{color:"var(--muted)"}}>Register now to manage bookings and track parcels</div>
                <Link to="/login" style={{fontSize:13,textDecoration:"underline",color:"var(--primary)"}}>Already have an account?</Link>
              </div>

              <form style={{marginTop:16,display:"grid",gap:12}}>
                <input placeholder="Full name" />
                <input placeholder="Email" />
                <input placeholder="Password" type="password" />
                <div style={{display:"flex",gap:8}}>
                  <input placeholder="Phone" style={{flex:"1"}} />
                  <select style={{width:160,padding:10,borderRadius:6}}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div style={{display:"flex",gap:8,marginTop:6}}>
                  <button className="btn btn-primary" style={{padding:"10px 18px"}}>Create account</button>
                  <button className="btn btn-ghost" style={{padding:"10px 18px"}}>Clear</button>
                </div>
              </form>
            </div>

            <section style={{marginTop:20}}>
              <div className="card" style={{padding:22}}>
                <h3 style={{marginTop:0}}>About this website</h3>
                <p style={{color:"var(--muted)",lineHeight:1.6}}>
                  E-Post Office (demo) is a lightweight parcel booking and tracking app. Users can register, book parcels, and track shipments. Admins can manage parcel statuses and view live activity. This demo uses a client-side store for quick prototyping; replace with a secure backend before production.
                </p>
                <div style={{display:"flex",gap:12,marginTop:12}}>
                  <a href="/docs" className="btn btn-ghost">Documentation</a>
                  <a href="/contact" className="btn btn-ghost">Contact Sales</a>
                </div>
              </div>
            </section>
          </div>

          <aside>
            <div className="card" style={{padding:22}}>
              <h4 style={{marginTop:0}}>Quick Actions</h4>
              <div style={{display:"grid",gap:12,marginTop:12}}>
                <Link to="/book" className="btn btn-primary" style={{padding:"12px",textAlign:"left"}}>Book Parcel</Link>
                <Link to="/dashboard/quick-actions" className="btn btn-ghost" style={{padding:"12px",textAlign:"left"}}>Quick Actions</Link>
                <Link to="/track" className="btn btn-ghost" style={{padding:"12px",textAlign:"left"}}>Track Parcel</Link>
                <button className="btn btn-ghost" onClick={()=>window.location.href="tel:+911123372637"} style={{padding:"12px",textAlign:"left"}}>Contact Support</button>
              </div>
            </div>

            <div className="card" style={{padding:18,marginTop:14,textAlign:"center"}}>
              <img src="/logo.png" alt="logo" style={{width:120,height:120,objectFit:"cover",borderRadius:12}} />
              <div style={{marginTop:12,fontWeight:700}}>E-Post Office</div>
              <div style={{color:"var(--muted)",fontSize:13}}>Contactless parcel management</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
