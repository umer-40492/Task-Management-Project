import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div>
          <h2 className="text-center text-2xl font-semibold">Signup</h2>
          <input
            type="username"
            placeholder="User Name"
            name="username"
            className="
        bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="email"
            placeholder="xyz@example.com"
            name="xyz@example.com"
            className="
        bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="
        bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
         <div className='flex w-full justify-between items-center'>
       <button className="
        bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounder">Signup</button>
        <Link  to='/login' className='text-gray-400 hover:text-gray-200'>
        Aready having an Account? Login here
        </Link>      

       </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
