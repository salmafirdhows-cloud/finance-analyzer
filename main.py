from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.statement import router

app = FastAPI(title="Bank Analyzer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/statement")