import React from 'react';
import ProfileButton from './profile-button';
import ExpensesButton from './expenses-button';
import RevenueButton from './revenues-button';

export default function Footer(props) {
  return (
    <>
      <ProfileButton />
      <br></br>
      <ExpensesButton />
      <br></br>
      <RevenueButton />
    </>
  );
}
