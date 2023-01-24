import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './auth';

export default function Login() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();
    const handleLogin = () => {
        auth.login(user);
        navigate('/');
    }
  return (
    <div className='LoginForm'>
      <label>
        Username: <input type='text' onChange={(event)=>setUser(event.target.value)}  />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
