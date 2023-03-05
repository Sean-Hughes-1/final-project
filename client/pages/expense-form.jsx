import React, { useState } from 'react';

const categories = [1, 2, 3];

const ExpenseForm = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      date,
      amount,
      description,
      categoryId: category,
      userId: 1
    };

    fetch('/api/app/add/expense/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to connect to API');
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    window.location.href = '#expenses';
  };

  return (
    <div>
      <h2>ADD EXPENSE</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input className="save-button" type="submit" value="Submit" />
        <a className="cancel" href='#expenses'>
          CANCEL
        </a>
      </form>
    </div>
  );
};

export default ExpenseForm;
