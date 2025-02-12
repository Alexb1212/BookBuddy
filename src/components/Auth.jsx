import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  
  const registerUser = async (event) => {
    event.preventDefault(); 
    setError(''); 

    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname: firstNameInput,
          lastname: lastNameInput,
          email: emailInput,
          password: passwordInput
        })
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const userInfo = await response.json();
      console.log('Registration successful:', userInfo);
      setIsLoggingIn(true);
    } catch (error) {
      setError(error.message); 
    }
  };

 
  const logIn = async (event) => {
    event.preventDefault(); 
    setError(''); 

    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput
        })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { access_token } = await response.json();
      setToken(access_token);
      localStorage.setItem('token', access_token);

      if(access_token) {
        navigate('/');
      }

      console.log('Login successful:', access_token);
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}

      {isLoggingIn ? (
        <form onSubmit={logIn}>
          <input
            type="email"
            placeholder='Email'
            onChange={(event) => setEmailInput(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Password'
            onChange={(event) => setPasswordInput(event.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <p>
            Register here! Click to <button type="button" onClick={() => setIsLoggingIn(false)}>register</button>
          </p>
        </form>
      ) : (
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder='First Name'
            onChange={(event) => setFirstNameInput(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder='Last Name'
            onChange={(event) => setLastNameInput(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder='Email'
            onChange={(event) => setEmailInput(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Password'
            onChange={(event) => setPasswordInput(event.target.value)}
            required
          />
          <button type="submit">Register</button>
          <p>
            Need to log in? Click <button type="button" onClick={() => setIsLoggingIn(true)}>here</button>
          </p>
        </form>
      )}
    </>
  );
};

export default Login;