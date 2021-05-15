import React from "react";
import "./Pokecard.css";

interface PokecardProps {
    spriteurl?: string;
    name: string;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokecard = ({ name, spriteurl, onPokemonClick }: PokecardProps) => {
    return (
        <div onClick={() => onPokemonClick(name)} className="pokecard">
            <img className="pokemon-sprite" alt="pokemon" src={spriteurl} />
            <p>{name}</p>
        </div>
    );
};

export default Pokecard;