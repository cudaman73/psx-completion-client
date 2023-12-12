import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

// Update on change
const handleChange = (e) => {
    if (e.target.id === 'user-email') {
      setUsername(e.target.value);
    } else if (e.target.id === 'user-password') {  
      setPassword(e.target.value);
    } else if (e.target.id === 'confirm-password') {
        setConfirmPassword(e.target.value); 
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
    }

    try {
      const registerData = {username, password};

      const response = await fetch('/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)  
      });
      
      if(!response.ok) {
        throw new Error('Failed to register user');
      }

      navigate('/');
    } catch (err) {
      setError('Failed to register user')  
    }
  };

  return (
    <>
      <div className="row">
        <h1>Registration Form</h1>
      </div>
      <div className="row col-md-4 mx-auto">
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <div className="mb-3">
            <label htmlFor="user-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="user-email" onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="user-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="user-password" onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm-password" onChange={handleChange}/>
          </div>
          <button name="login" type="submit" className="btn btn-secondary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;