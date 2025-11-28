from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from typing import List
from motor.motor_asyncio import AsyncIOMotorClient
import os, datetime
from .auth_router import get_current_user

MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "prou")
client = AsyncIOMotorClient(MONGODB_URI)
db = client[DB_NAME]
router = APIRouter(prefix="/orders")

class OrderIn(BaseModel):
    items: List[dict]
    amount: float
    payment_method: str

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_order(payload: OrderIn, user: str = Depends(get_current_user)):
    order = {"user": user, "items": payload.items, "amount": payload.amount, "payment_method": payload.payment_method, "status":"pending", "created_at": datetime.datetime.utcnow()}
    res = await db.orders.insert_one(order)
    order = await db.orders.find_one({"_id": res.inserted_id})
    order["id"] = str(order.pop("_id"))
    return order

@router.get("/", response_model=List[dict])
async def list_orders(user: str = Depends(get_current_user)):
    out = []
    cursor = db.orders.find({"user": user}).sort("created_at", -1)
    async for o in cursor:
        o["id"] = str(o.pop("_id"))
        out.append(o)
    return out
