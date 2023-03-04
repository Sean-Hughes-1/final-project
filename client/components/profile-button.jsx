import React, { useEffect } from 'react';
export default function ProfileButton(props) {
  useEffect(() => {
    // code to run on component mount
    console.log('Component mounted');
  }, []);

  return (
    <a href="#profile">
      Profile
    </a>

  );
}
