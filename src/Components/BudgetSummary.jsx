export default function BudgetSummary() {
  const budget = 5000; // Replace with data from PHP backend
  const spent = 370;   // Sum of all expenses

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-1">Budget Overview</h2>
      <div className="bg-gray-200 h-4 rounded overflow-hidden">
        <div
          className="bg-green-500 h-full"
          style={{ width: `${(spent / budget) * 100}%` }}
        ></div>
      </div>
      <p className="text-sm mt-1">
        Spent: ৳{spent} / ৳{budget}
      </p>
    </div>
  );
}
