function TransactionTable({ transactions }) {
  return (
    <div>
      <h3>Transactions</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            {["Date", "Description", "Amount", "Type", "Category"].map((h) => (
              <th key={h} style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.75rem" }}>{t.date}</td>
              <td style={{ padding: "0.75rem" }}>{t.description}</td>
              <td style={{ padding: "0.75rem", color: t.type === "credit" ? "green" : "red" }}>
                {t.type === "credit" ? "+" : "-"}₹{t.amount.toLocaleString()}
              </td>
              <td style={{ padding: "0.75rem" }}>{t.type}</td>
              <td style={{ padding: "0.75rem", textTransform: "capitalize" }}>{t.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;