import pandas as pd
import pdfplumber
from models.transaction import Transaction

def parse_csv(file) -> list[Transaction]:
    df = pd.read_csv(file)
    df.columns = [c.strip().lower() for c in df.columns]
    transactions = []
    for _, row in df.iterrows():
        amount = float(row["amount"])
        transactions.append(Transaction(
            date=str(row["date"]),
            description=str(row["description"]),
            amount=abs(amount),
            type="credit" if amount > 0 else "debit"
        ))
    return transactions

def parse_pdf(file) -> list[Transaction]:
    transactions = []
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            table = page.extract_table()
            if table:
                for row in table[1:]:  # skip header
                    try:
                        amount = float(row[2].replace(",", ""))
                        transactions.append(Transaction(
                            date=row[0],
                            description=row[1],
                            amount=abs(amount),
                            type="credit" if amount > 0 else "debit"
                        ))
                    except:
                        continue
    return transactions