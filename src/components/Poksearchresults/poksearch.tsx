import React from "react";

import "./poksearch.css";



const PokeSearchResult = () => {
    const selectedPokemon=false;

    return (
        <div className="poke-result-card">
            {selectedPokemon ? (
                <div>
                    {/* <img
                        className="pokemon-animated-sprite"
                        alt="pokemon"
                        src={sprites?.animated || sprites?.normal}
                    /> */}
                    <p>Name: Mantis Shrimp</p>
                    <p>Id: some id</p>
                    <p>Height: 45</p>
                    <p>Weight: 23</p>
                    <p>Base Exp: 21</p>
                </div>
            ) : (
                <h2> Welcome to the pokedex</h2>
            )}
        </div>
    );
};

export default PokeSearchResult;