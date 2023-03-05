import React, { useState, useEffect } from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import NotFound from './pages/not-found';
import Expenses from './pages/expenses';
import RevenueForm from './pages/revenue-form';
import ExpenseForm from './pages/expense-form';
import Revenues from './pages/revenues';
import { parseRoute } from './lib';
export default function App() {
  const[route, setRoute] = useState(parseRoute(window.location.hash));
  useEffect(() => {
    window.addEventListener('hashchange', () => setRoute(parseRoute(window.location.hash)));
  }, []);
  function renderPage() {
  if (route.path === '') {
    return <Home />;
  }
  if (route.path === 'profile') {
    return <Profile />;
  }
  if (route.path === 'expenses') {
    return <Expenses />
  }
  if (route.path === 'expense-form') {
    return <ExpenseForm />
  }
  if (route.path === 'revenue-form') {
    return <RevenueForm />
  }
  if (route.path === 'revenues') {
    return <Revenues />
  }
  return <NotFound />;
}

  return (
    <>
    { renderPage() }
    </>
  );
}
