import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from './AuthContext';

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    if (e.target.id === 'user-email') {
      setUsername(e.target.value);
    } else if (e.target.id === 'user-password') {
      setPassword(e.target.value);
    } else if (e.target.id === 'confirm-password') {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await register(username, password);
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to register user');
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to register user');
    }
  };

  return (
    <>
      <div className="row">
        <h1>Create Account</h1>
      </div>
      <div className="row col-md-4 mx-auto">
        <form onSubmit={handleSubmit}>
          {error && <div className="text-danger mb-2">{error}</div>}
          <div className="mb-3">
            <label htmlFor="user-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="user-email" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="user-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="user-password" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm-password" onChange={handleChange} />
          </div>
          <button name="register" type="submit" className="btn btn-secondary">
            Sign Up
          </button>
        </form>
        <p className="mt-3">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </>
  );
}

export default Register;
