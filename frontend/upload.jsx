import { useState } from "react";
import axios from "axios";

function Upload({ onResult }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("http://localhost:8000/api/statement/upload", formData);
      onResult(res.data);
    } catch (err) {
      setError("Failed to process file. Make sure it's a valid CSV.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "2rem", padding: "1.5rem", border: "2px dashed #ccc", borderRadius: "8px", textAlign: "center" }}>
      <p>Upload your bank statement (CSV or PDF)</p>
      <input type="file" accept=".csv,.pdf" onChange={handleFile} />
      {loading && <p>⏳ Analyzing...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Upload;