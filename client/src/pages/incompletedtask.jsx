import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios';

const Imcompletedtask = () => {
  const [data, setData] = useState();
  const headers = {id:localStorage.getItem("id"), authorization :`Bearer ${localStorage.getItem("token")}`};
  useEffect(()=> {
      const fetch = async()=>{
          const response = await axios.get('http://localhost:4000/api/v2/get-incomplete-task',{headers});
          setData(response.data.data)
      };
      
      fetch();
    });
  return (
    <div><Cards home={'false'} data={data}/></div>
  )
}

export default Imcompletedtask 