import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpesne }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onAddExpesne} />
    </div>
  );
};

export default NewExpense;
