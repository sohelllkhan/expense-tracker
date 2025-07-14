export default function ExpenseList() {
  // Dummy data for now
  const expenses = [
    { id: 1, category: "Food", amount: 250 },
    { id: 2, category: "Transport", amount: 120 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recent Expenses</h2>
      <ul className="divide-y">
        {expenses.map((exp) => (
          <li key={exp.id} className="py-2 flex justify-between">
            <span>{exp.category}</span>
            <span>৳ {exp.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
