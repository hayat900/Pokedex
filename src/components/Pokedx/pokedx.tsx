import React from 'react';
import Pokelist from '../Pokelist/Pokelist';
import PokeSearchResult from '../Poksearchresults/poksearch';
import Searchbox from '../searchbox/searchbox';
import "./pokedx.css";
const Pokedx=()=>{
    return(
<div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox/>
                <Pokelist/>
            </div>
            <div className="pokesearchresult-container">
               <PokeSearchResult/>
            </div>
        </div>
        )
}
export default Pokedx;
