import React from "react";

export default function SupportPopup({ open, title = "Customer Support", onClose }) {
  if (!open) return null;
  const unique = `EP-${Date.now().toString().slice(-6)}`;
  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 80, background: "rgba(0,0,0,0.28)" }}>
      <div style={{ width: 420, background: "var(--card)", borderRadius: 10, boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}>
        <div style={{ padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight: 700, color: "var(--primary-dark)" }}>{title}</div>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
        <div style={{ padding: 18, display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 700 }}>India Helpline</div>
          <div style={{ fontSize: 18, color: "var(--primary-dark)" }}>011-23372637</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>Available 9:00 AM — 6:00 PM IST</div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
            Reference popup id: <span style={{ fontWeight: 700 }}>{unique}</span>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <a href="tel:+911123372637" className="btn btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>Call Now</a>
            <button className="btn btn-ghost" onClick={onClose}>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}
