function Summary({ data }) {
  const cards = [
    { label: "Total Credit", value: data.total_credit, color: "#4caf50" },
    { label: "Total Debit", value: data.total_debit, color: "#f44336" },
    { label: "Net Balance", value: data.net_balance, color: "#2196f3" },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
      {cards.map((card) => (
        <div key={card.label} style={{ flex: 1, padding: "1.5rem", borderRadius: "8px", background: card.color, color: "white", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>{card.label}</p>
          <h2 style={{ margin: "0.5rem 0 0" }}>₹{card.value.toLocaleString()}</h2>
        </div>
      ))}
    </div>
  );
}

export default Summary;