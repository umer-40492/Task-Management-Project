import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {authActions} from '../store/auth'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const [data, setData] = useState({username:"", password: ""});
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn  = useSelector((state)=> state.auth.isLoggedIn);
  const change = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  if(isLoggedIn){
    history('/')
    }
  const submit = async (e)=>{
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/api/v1/log-in", data)
      setData({username: "", password: ""});
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("token", res.data.token);
      dispatch(authActions.login());
      history('/')
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <div className="h-[98vh] flex items-center justify-center">
    <div className="p-4 w-2/6 rounded bg-gray-800">
      <form onSubmit={submit}>
        <h2 className="text-center text-2xl font-semibold">Login</h2>
        <input
          type="username"
          placeholder="User Name"
          name="username"
          value={data.username}
          onChange={change}
          className="
      bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={change}
          className="
      bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
       <div className='flex w-full justify-between items-center'>
       <button type='submit' className="
        bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounder">Login</button>
        <Link  to='/signup' className='text-gray-400 hover:text-gray-200'>
        Create Account
        </Link>      

       </div>
      </form>
    </div>
  </div>
  )
}

export default Login