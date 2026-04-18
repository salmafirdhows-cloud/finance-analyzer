import { useState } from "react";
import Upload from "./components/Upload";
import Summary from "./components/Summary";
import CategoryChart from "./components/CategoryChart";
import TransactionTable from "./components/TransactionTable";

function App() {
  const [data, setData] = useState(null);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🏦 Bank Statement Analyzer</h1>
      <Upload onResult={setData} />
      {data && (
        <>
          <Summary data={data} />
          <CategoryChart breakdown={data.category_breakdown} />
          <TransactionTable transactions={data.transactions} />
        </>
      )}
    </div>
  );
}

export default App;