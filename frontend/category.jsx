import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF", "#FF4081"];

function CategoryChart({ breakdown }) {
  const data = Object.entries(breakdown).map(([name, value]) => ({ name, value }));

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>Spending by Category</h3>
      <PieChart width={400} height={300}>
        <Pie data={data} cx={200} cy={150} outerRadius={100} dataKey="value" label>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(val) => `₹${val}`} />
        <Legend />
      </PieChart>
    </div>
  );
}

export default CategoryChart;