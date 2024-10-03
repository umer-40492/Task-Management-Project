import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const sidebar = () => {
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
            <h2 className='text-xl font-semibold' >Task Management</h2>
            <h2 className='mb-1 text-gray-300'>example@gmail.com</h2>
            <hr />  
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
            <button className='w-full rounded p-2 bg-gray-700'>Log Out</button>
        </div>
    </>
  )
}

export default sidebar