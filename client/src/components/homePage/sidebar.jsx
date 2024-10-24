/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from 'axios';
const sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data , setData] = useState();
    const logout =()=>{
        dispatch(authActions.logout());
        localStorage.clear("id");
        localStorage.clear("token");
        navigate('/signup')
    }
    useEffect(()=> {
        const headers = {id:localStorage.getItem("id"), authorization :`Bearer ${localStorage.getItem("token")}`};
        const fetch = async()=>{
            const response = await axios.get('http://localhost:4000/api/v2/get-all-task',{headers});
            setData(response.data.data)
        };
        if(localStorage.getItem("id") && localStorage.getItem("token"))
            {
                fetch();
            }
    }, []);
    const heading = [
        {
            title: 'All',
            icons: <CgNotes />,
            link: '/'
        },
        {
            title: 'Completed Tasks',
            icons: <FaCheckDouble />,
            link: '/completedTask'
        },
        {
            title: 'Incompleted Tasks',
            icons: <TbNotebookOff />,
            link: '/incompletedTask'
        },
        {
            title: 'Important Tasks',
            icons: <MdLabelImportant />,
            link: '/importantTask'
        },
    ]
    
  return (
    <>
        <div>
           {data && (
            <div>
            <h2 className='text-xl font-semibold' >{data.username}</h2>
             <h2 className='mb-1 text-gray-300'>{data.email}</h2>
             <hr />  
            </div>
           )}
            <div>
            {heading.map((items, i)=>(
            <Link to={items.link} key={i} className='my-2 flex gap-3 items-center p-2 hover:bg-gray-700 transition-all duration-3 rounded'>
                {items.icons}
                {items.title}
            </Link>
            ))}
        </div>
        </div>
       
        <div>
            <button onClick={logout} className='w-full rounded p-2 bg-gray-700'>Log Out</button>
        </div>
    </>
  )
}

export default sidebar