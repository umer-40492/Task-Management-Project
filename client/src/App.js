import React, { useEffect } from 'react';
import Home from './pages/Home.jsx'
import Alltasks from './pages/allTask.jsx';
import CompletedTask from './pages/completedtask.jsx';
import ImportantTask from './pages/importanttask.jsx';
import UncompletedTask from './pages/incompletedtask.jsx';
import {Routes,  Route, useNavigate} from "react-router-dom";
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth.js';

const App = () => { 
  const navigate =  useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn  = useSelector((state)=> state.auth.isLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    else if(!isLoggedIn){
    navigate('/signup')
    }
  },[]);
  return (
    <div className='bg-gray-600 h-screen relative text-white p-2'> 
    
      <Routes>
        <Route exact path="/" element={<Home/>} >
          <Route index element={<Alltasks/>} />
          <Route path="/importanttask" element={<ImportantTask/>} />
          <Route path="/incompletedTask" element={<UncompletedTask/>} />
          <Route path="/completedTask" element={<CompletedTask/>} />
        </Route>
        <Route path='/signup' element={<Signup ></Signup>}></Route>
        <Route path='/login' element={<Login ></Login>}></Route>      
      </Routes>
    </div>
  )
}
export default App;