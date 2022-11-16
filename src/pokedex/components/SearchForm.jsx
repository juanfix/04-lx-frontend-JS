import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { getPokemon } from "../../api/pokeApi";
import { useForm } from "../hooks/useForm";
import { PokemonDetailCard } from "./PokemonDetailCard";

const MySwal = withReactContent(Swal)

export const SearchForm = () => {

    const initialValue = {
        id : 0,
        name: 'Search',
        sprites: {
            front_default: './assets/img/pokeball.png'
        },
    }

    const [pokemonInfo, setPokemonInfo] = useState(initialValue);

    const { pokemonValue, onInputChange } = useForm({
        pokemonValue: ''
    });

    const onSearchPokemon = (event) => {
        event.preventDefault();
        const pokemon = getPokemon(pokemonValue);
        pokemon.then(({ data }) => setPokemonInfo(data)).catch((err) => { 
            setPokemonInfo(initialValue);
            if(err.response && err.response.status === 404) {
                console.clear();
            }
            MySwal.fire({
              icon: 'error',
              title: <p>Your search returned no results</p>,
              text: 'Please, adjust your search and try again',
            });
           })
    }

  return (
    <>
        <img src="./assets/img/rotomdex.png" />
        <form onSubmit={ onSearchPokemon }>
        <div className="form-group">
            <label htmlFor="pokemonSearch">Search a Pokémon</label>
            <input 
                type="text" 
                className="form-control" 
                id="pokemonSearch" 
                placeholder="Introduce a name..." 
                name="pokemonValue"
                value={ pokemonValue }
                onChange={ onInputChange } />
        </div>
        <button type="submit" className="btn btn-secondary mt-3">Search</button>
        </form>
        <PokemonDetailCard pokemonInfo={ pokemonInfo } />
    </>
  )
}
