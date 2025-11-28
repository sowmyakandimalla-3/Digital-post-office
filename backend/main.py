import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()
app = FastAPI(title="ProU E-Post API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
from auth_router import router as auth_router
from orders_router import router as orders_router
from payments_router import router as payments_router
from auth_companies import router as auth_companies_router
app.include_router(auth_router)
app.include_router(auth_companies_router)
app.include_router(orders_router)
app.include_router(payments_router)
@app.get("/health")
async def h():
    return {"status":"ok"}
