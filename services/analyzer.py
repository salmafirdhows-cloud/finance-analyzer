from collections import defaultdict

CATEGORIES = {
    "food": ["swiggy", "zomato", "restaurant", "cafe", "mcdonald"],
    "transport": ["uber", "ola", "metro", "petrol", "fuel"],
    "shopping": ["amazon", "flipkart", "myntra", "store"],
    "utilities": ["electricity", "water", "internet", "recharge"],
    "salary": ["salary", "payroll", "credited by"],
}

def categorize(description: str) -> str:
    desc = description.lower()
    for category, keywords in CATEGORIES.items():
        if any(kw in desc for kw in keywords):
            return category
    return "other"

def analyze(transactions):
    for t in transactions:
        t.category = categorize(t.description)

    total_credit = sum(t.amount for t in transactions if t.type == "credit")
    total_debit = sum(t.amount for t in transactions if t.type == "debit")

    category_spend = defaultdict(float)
    for t in transactions:
        if t.type == "debit":
            category_spend[t.category] += t.amount

    return {
        "total_credit": round(total_credit, 2),
        "total_debit": round(total_debit, 2),
        "net_balance": round(total_credit - total_debit, 2),
        "category_breakdown": dict(category_spend),
        "transactions": [t.dict() for t in transactions]
    }