import React from 'react';
import Home from './pages/Home.jsx'
import Alltasks from './pages/allTask.jsx';
import CompletedTask from './pages/completedtask.jsx';
import ImportantTask from './pages/importanttask.jsx';
import UncompletedTask from './pages/incompletedtask.jsx';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Signup from './pages/Signup.jsx';
import Login from './pages/login.jsx';

const App = () => { 
  return (
    <div className='bg-gray-600 h-screen relative text-white p-2'> 
    <Router>
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
    </Router>
    </div>
  )
}
export default App;