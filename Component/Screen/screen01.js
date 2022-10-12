import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Pagination from "../pagination.js";
import './Screen01.css';



function Screen01() {

    const [char, setChar]= useState([]);
    let navigate = useNavigate();

    const charFunction = async ()=> {
        const charData = await axios.get(`https://swarupa.github.io/starwars-api/api/all.json`);
        console.log(charData.data);
        setChar(charData.data);
    }

    useEffect (()=>{
        charFunction();
    }, []);

    const charDetails =(id)=>{
        navigate(`/details/${id}`);
    }

  return (
  <div className='main_container'>
    <Pagination/>
    <div className='level01'>
      {
        char && char.map(list=>(
            <div>
              <img src ={list.image} alt={list.name} className='image'/>
              <h2 onClick={()=>charDetails(list.id)}>{list.name}</h2>
            </div>
        ))
      }
    </div>
  </div>
  )
}

export default Screen01
