import React, { useEffect } from 'react';
export default function ExpenseAdd(props) {
  useEffect(() => {
    // code to run on component mount
    console.log('Component mounted');
  }, []);

  return (
    <a href="#expense-form">
      +
    </a>
  );
}
