import React from 'react';
import Pokelist from '../Pokelist/Pokelist';
import PokeSearchResult from '../Poksearchresults/poksearch';
import Searchbox from '../searchbox/searchbox';
import "./pokedx.css";
import { PokemonSchema } from "../../types/PokemonSchema";
interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
}
const Pokedx=({searchedPokemons,onInputChange}:PokedexProps)=>{
    return(
<div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox
               onInputChange={onInputChange}
                />
                <Pokelist
                searchedPokemons={searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-container">
               <PokeSearchResult/>
            </div>
        </div>
        )
}
export default Pokedx;
