from fastapi import APIRouter, UploadFile, File, HTTPException
from services.parser import parse_csv, parse_pdf
from services.analyzer import analyze
import io

router = APIRouter()

@router.post("/upload")
async def upload_statement(file: UploadFile = File(...)):
    content = await file.read()
    if file.filename.endswith(".csv"):
        transactions = parse_csv(io.StringIO(content.decode("utf-8")))
    elif file.filename.endswith(".pdf"):
        transactions = parse_pdf(io.BytesIO(content))
    else:
        raise HTTPException(status_code=400, detail="Only CSV or PDF supported")
    
    return analyze(transactions)