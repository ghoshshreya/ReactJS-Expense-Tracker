import * as React from 'react';
import './ExpenseItem.css';
export default function ExpenseItem(props) {
  const expenseDate = new Date(2023, 2, 29); // March 29, 2023
  const expenseTitle = 'Car Insurance';
  const expensePrice = 219;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}
