import axios from "axios";
import React, { useState, useEffect } from "react";




export default function PokemonPage () {

    const [pokemones, setPokemones] = useState([]);  


    const getPokemones = async ()  =>  {
        
        
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/`);
  
      
            setPokemones(res.data.results)
            console.log(res.data.results)
    }

    useEffect(()=> {
        getPokemones();
    },[])
   

   

    return (
        <div className='c-PokemonesPage' >
        <h1>Pokemones</h1>
            
        </div>
    )

}