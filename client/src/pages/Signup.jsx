import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Signup() {
  const history = useNavigate();
  const isLoggedIn  = useSelector((state)=> state.auth.isLoggedIn);
  const [data, setData] = useState({username:"", email: "", password: ""});
  if(isLoggedIn){
    history('/')
    }
  const change = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  
  const submit = async (e)=>{
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/api/v1/sign-in", data)
      console.log('response:', res);
      history('/')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
  
  <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <form onSubmit={submit}>
          <h2 className="text-center text-2xl font-semibold">Signup</h2>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={data.username}
            required
            onChange={change}
            className="
        bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="text"
            placeholder="xyz@example.com"
            name="email"
            value={data.email}
            required
            onChange={change}
            className="
        bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            required
            onChange={change}
            className="
        bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
         <div className='flex w-full justify-between items-center'>
       <button onClick={submit} className="
        bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounder">Signup</button>
        <Link  to='/login' className='text-gray-400 hover:text-gray-200'>
        Aready having an Account? Login here
        </Link>      

       </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
