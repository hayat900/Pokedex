import React from "react";
import "./Pokecard.css";



const Pokecard = (props:any) => {
    return (
        <div className="pokecard">
            {/* <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} /> */}
            <p>{props.name}</p>
        </div>
    );
};

export default Pokecard;