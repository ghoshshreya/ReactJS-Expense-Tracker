import * as React from 'react';
import './ExpenseItem.css';
import Card from './Card';
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>{props.expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
}
