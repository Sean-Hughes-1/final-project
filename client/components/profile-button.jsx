import React, { useEffect } from 'react';
export default function ProfileButton(props) {
  useEffect(() => {
    // code to run on component mount
    console.log('Component mounted');
  }, []);
  function handleClickProfile(e) {
    console.log('event', e);

  }
  return (
    <button onClick={handleClickProfile}>
      Profile
    </button>

  );
}
