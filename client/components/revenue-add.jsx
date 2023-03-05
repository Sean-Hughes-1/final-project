import React, { useEffect } from 'react';
export default function RevenueAdd(props) {
  useEffect(() => {
    // code to run on component mount
    console.log('Component mounted');
  }, []);

  return (
    <a href="#revenue-form">
      +
    </a>
  );
}
