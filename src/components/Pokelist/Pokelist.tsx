import React from "react";
import Pokecard from '../Pokecard/Pokecard';
import "./Pokelist.css";
import { PokemonSchema } from "../../types/PokemonSchema";
import { pokemonData } from "../../data/pokemonData";
interface PokedexProps {
    searchedPokemons: PokemonSchema[];
}

const Pokelist = ({searchedPokemons}:PokedexProps) => {
    return (
        <div className="pokelist">
           {
               searchedPokemons.map((pokemon)=>{
                   if(pokemon.name)
                   {
                    return(
                        <Pokecard
                        key={pokemon.id}
                        name={pokemon.name}
                        spriteurl={pokemon.sprites.normal}
                        />
                    )
                   }
               }
               )
           
           }   
          
        </div>
    );
};

export default Pokelist;