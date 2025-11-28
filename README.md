# 📮 E-Post Office Management System

A full-stack web application built with **MERN Stack (MongoDB, Express, React, Node.js)** that allows users to **book parcels, track shipments, scan QR codes, handle admin updates**, and manage postal services through a clean lavender-themed interface.

![App Screenshot](./output-demo.png)

---

## 🚀 Features

- 📦 **Book Parcels** — Create and register new parcel bookings with unique Parcel IDs  
- 🔎 **Track Parcels** — Track using Parcel ID or **QR Code Scanner**  
- 📷 **QR Scanner** — Live camera scanning using `html5-qrcode`  
- 🎉 **Interactive UI** — Confetti, modals, popups, animations  
- 🧑‍💼 **User & Admin Login** — Role-based access system  
- 📨 **Admin Panel** — Update parcel status: In Transit / Delivered / Returned  
- 🧭 **Quick Actions Dashboard** — Book, Track, Review, Support  
- ☎️ **Support Popup** — India helpline with unique popup reference ID  
- 🟣 **Lavender Interface** — Modern, responsive, visually clean  
- 🧾 **LocalStorage + MongoDB Ready** — Works as demo or production  

---

## 🧰 Tech Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js, React Router DOM, Axios, HTML5 QR Scanner, Canvas-Confetti, CSS |
| Backend    | Node.js, Express.js |
| Database   | LocalStorage (Demo) / MongoDB Atlas (Production Ready) |
| Tools      | Git, VS Code, Railway / Render / Vercel |

---

## 🖥️ How to Run Locally

```bash
# Backend Setup
cd backend
npm install
npm run dev

# Frontend Setup
cd ../frontend
npm install
npm start
