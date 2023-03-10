from fastapi.middleware.cors import CORSMiddleware
from fastapi import Depends, FastAPI, HTTPException
from typing import List
from sqlalchemy.orm import Session
import crud
import models
import schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app=FastAPI()

origins=[
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def Hello():
    return {"Hello":"World"}

@app.post("/users/", response_model=schemas.UserCreate)
def create_user(user: schemas.UserCreate, db: Session=Depends(get_db)):
    db_user = crud.get_user_by_email(db,email=user.email)
    if db_user:
        raise HTTPException(status_code=400,detail="Email already registered")
        # raise HTTPException(detail="Email already registered")
    return crud.create_user(db=db,user=user)

@app.get("/users/",response_model=List[schemas.User])
def read_users(skip: int = 0,limit: int = 100,db: Session = Depends(get_db)):
    users = crud.get_users(db,skip=skip,limit=limit)
    return users
