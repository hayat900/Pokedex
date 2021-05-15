import React from "react";
import Pokecard from '../Pokecard/Pokecard';
import "./Pokelist.css";
import { PokemonSchema } from "../../types/PokemonSchema";
import { pokemonData } from "../../data/pokemonData";
interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onPokemonClick:(pokemonName: string) => void;
}

const Pokelist = ({searchedPokemons,onPokemonClick}:PokedexProps) => {
    return (
        <div className="pokelist">
           {
               searchedPokemons.map((pokemon)=>{
                   if(pokemon.name)   //what if pokemon is not present.To prevent that error,we write this
                   {
                    return(
                        <Pokecard
                        key={pokemon.id}
                        name={pokemon.name}
                        spriteurl={pokemon.sprites.normal}
                        onPokemonClick={onPokemonClick}
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