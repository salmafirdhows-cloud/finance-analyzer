from pydantic import BaseModel
from typing import Optional

class Transaction(BaseModel):
    date: str
    description: str
    amount: float
    type: str          # "credit" or "debit"
    category: Optional[str] = "Uncategorized"