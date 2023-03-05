import React from 'react';
import ExpenseAdd from '/workspaces/final-project/client/components/expense-add';
import Footer from '../components/footer';
export default function Expenses(props) {
  return (
    <div>
      <h1>Hello, world! I am the Expenses page</h1>
      <ExpenseAdd />
      <br></br>
      <Footer />
    </div>
  );
}
