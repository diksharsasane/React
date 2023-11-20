//import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data= useLoaderData()

    // useState [data,setData] = useState([])

    // //it shoud call my api when my component load for that useEffect uses

    // //use effect mount first when these component/page load
    // useEffect(() => {
    //     fetch('https://api.github.com/users/diksharsasane')
    //     .then(response => response.json())   //by default api are in String so convert into json
    //     .then(data => {
    //     console.log(data)  //json data
    //     setData(data)  //now we reflect string file to json file
    // })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Repositorues:  {data?.followers} Million
    <img src={data?.avatar_url} alt ="git picture" width={300} />
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/diksharsasane')

    return response.json();
}