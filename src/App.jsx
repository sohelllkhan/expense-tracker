import React from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <Header />
        <BudgetSummary />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}
