import React from "react";
import "./Pokecard.css";


interface pokecardprops{
    name:string|undefined;
    spriteurl:string|undefined;
}
const Pokecard = ({name,spriteurl}:pokecardprops) => {
    return (
        <div className="pokecard">
            <img className="pokemon-sprite" alt="pokemon" src={spriteurl} />
            <p>{name}</p>
        </div>
    );
};

export default Pokecard;