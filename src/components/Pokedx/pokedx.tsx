import React from 'react';
import Pokelist from '../Pokelist/Pokelist';
import PokeSearchResult from '../Poksearchresults/poksearch';
import Searchbox from '../searchbox/searchbox';
import "./pokedx.css";
import { PokemonSchema } from "../../types/PokemonSchema";
interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
    selectedPokemon:PokemonSchema | undefined;
    onPokemonClick:(pokemonName: string) => void;
}
const Pokedx=({searchedPokemons,onInputChange,selectedPokemon,onPokemonClick}:PokedexProps)=>{
    return(
<div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox 
               onInputChange={onInputChange}
                />
                <Pokelist
                searchedPokemons={searchedPokemons} onPokemonClick={onPokemonClick}
                
                />
            </div>
            <div className="pokesearchresult-container">
               <PokeSearchResult selectedPokemon={selectedPokemon}/>
            </div>
        </div>
        )
}
export default Pokedx;
