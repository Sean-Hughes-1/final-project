import React from 'react';
import ProfileButton from './profile-button';
import ExpensesButton from './expenses-button';

export default function Footer(props) {
  return (
    <>
      <ProfileButton />
      <br></br>
      <ExpensesButton />
    </>
  );
}
