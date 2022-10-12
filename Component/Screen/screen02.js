import React,{useEffect, useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Screen02.css";

function Screen02( {detailUrl} ) {
    const [people,setPeople] = useState({});
    const {charId} = useParams();
    
    console.log(charId);
    const peopleDetails = async (charId)=>{
        const data = await axios.get(`https://swapi.dev/api/people/${charId}/`)
        console.log(data.data);
        setPeople(data.data)
    }

    useEffect(()=>{
        peopleDetails(charId);
    }, [charId]);


  return (
    <div>
      Screen02 - {charId}
      {
        people && <div>
            <h3>{people.name}</h3>
            <h3>{people.birth_year}</h3>
            <h3>{people.gender}</h3>
            <h3>{people.height}</h3>
        </div>
      }
      {
        people.films && people.films.length > 0 && people.films.map(film =>(
            <div> {film} </div>
        ))
      }
    </div>
  )
}

export default Screen02
