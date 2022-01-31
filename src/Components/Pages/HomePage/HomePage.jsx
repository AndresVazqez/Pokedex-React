import './HomePage.scss';
import { useState } from 'react';
import axios from 'axios';

export default function HomePage () {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({

        name: "",
        number: "",
        species: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        type: "",
    });

    const searchPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then( (res) => {
          setPokemon({
            name: pokemonName,
            number: res.data.id,
            species: res.data.species.name,
            image: res.data.sprites.other.dream_world.front_default,
            hp: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed: res.data.stats[5].base_stat,
            type: res.data.types[0].type.name,
          });
          setPokemonChosen(true);
          
        });
      };

      return (
      
        <div className="c-homepage">              
          <div className="c-homepage__search">
            <h1>Pokédex</h1>
            <input placeholder='Encuentra tú Pokemon' type="text" onChange={(event) => {
              setPokemonName(event.target.value);
            }} value={pokemonName.toLowerCase()} />
            
            { pokemonName && <button onClick={searchPokemon}>Buscar Pokémon</button> }   
            
                
          </div>
            <div className="c-homepage__display">
              {!pokemonChosen ? (<h1>Por favor elije tú Pokémon</h1>) : (
              <div className="c-homepage__display-card">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={pokemon.name} />
                <h3>Numero: #{pokemon.number}</h3>
                <h3>Especie: {pokemon.species}</h3>
                <h3>Tipo: {pokemon.type}</h3>
                <h4>Hp: {pokemon.hp}</h4>
                <h4>Ataque: {pokemon.attack}</h4>
                <h4>Defensa: {pokemon.defense}</h4>
                <h4>Velocidad: {pokemon.speed}</h4>
              </div>
                )}
            </div>     
        </div>
      
    );  
}