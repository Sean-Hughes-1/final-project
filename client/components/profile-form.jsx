import React, { useState } from 'react';

export default function ProfileForm(props) {
  const [formData, setFormData] = useState({
    companyName: ''
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    event.preventDefault();
    const userId = 1;
    const url = `/api/app/profile`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        userId: userId,
        companyName: formData.companyName
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Update failed');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error: ', error);
    });
    window.location.href = '#';
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>UPDATE PROFILE</legend>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinput">
            COMPANY NAME
          </label>
          <div className="col-md-4">
            <input
              id="textinput"
              name="companyName"
              type="text"
              value={formData.companyName}
              placeholder="Company Name"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="button1id"></label>
          <div className="col-md-8">
            <button className="save-button" type="submit">
              SAVE
            </button>
            <a className="cancel" href='#'>
              CANCEL
            </a>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
