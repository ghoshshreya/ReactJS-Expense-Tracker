import * as React from 'react';
import './ExpenseItem.css';
export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>March 29, 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$219</div>
      </div>
    </div>
  );
}
