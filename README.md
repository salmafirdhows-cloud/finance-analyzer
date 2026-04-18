# Finance Analyzer

A full-stack finance analysis system that processes bank statements (CSV/PDF) and 
generates spending insights using a FastAPI backend.

---

##  Features

- Upload bank statements (CSV/PDF)
- Parse and extract transaction data
- Categorize expenses automatically
- Generate spending summaries and insights
- Modular backend architecture (routers, services, models)
- Frontend (React) in progress

---

##  Project Structure
# finance-analyzer
bank-analyzer/
├── backend/
│   ├── main.py
│   ├── routers/
│   │   └── statement.py
│   ├── services/
│   │   ├── parser.py
│   │   └── analyzer.py
│   ├── models/
│   │   └── transaction.py
│   ├── requirements.txt
│   └── __init__.py   (recommended)
│
├── frontend/
│   └── (React app - later)
│
└── README.md
---

##  Tech Stack

### Backend
- FastAPI
- Python
- Pandas
- PDFPlumber (for PDF parsing)

### Frontend (Upcoming)
- React.js
- Axios
- Tailwind CSS (optional)

---

##  API Endpoints (Backend)

- `POST /upload-statement` → Upload CSV/PDF bank statement  
- `GET /transactions` → Fetch parsed transactions  
- `GET /summary` → Get expense breakdown and insights  

---

##  How to Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Server runs at:

http://127.0.0.1:8000

---






