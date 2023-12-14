import React, { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import  AuthContext  from './AuthContext';

function Login() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

// Update on change
const handleChange = (e) => {
    if (e.target.id === 'user-email') {
      setUsername(e.target.value);
    } else if (e.target.id === 'user-password') {  
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await login(username, password);
      
      if(!response.ok) {
        throw new Error('Invalid login credentials');
      }

      navigate('/');
    } catch (err) {
      setError('Invalid email address or password')  
    }
  };

  return (
    <>
      <div className="row">
        <h1>Login</h1>
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
          <button name="login" type="submit" className="btn btn-secondary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;