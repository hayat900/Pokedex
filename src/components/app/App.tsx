import React from 'react';
import { pokemonData } from '../../data/pokemonData';
import Pokedx from '../Pokedx/pokedx';
import PokeSearchResult from '../Poksearchresults/poksearch';
import {
    PokemonSchema,
    PokemonSpritesSchema,
    UnpatchedPokemonSchema,
} from "../../types/PokemonSchema";
import './App.css';
interface Appstate{
    searchField:string;
    allPokemons:PokemonSchema[];
    selectedPokemon:PokemonSchema | undefined;
    searchedPokemons:PokemonSchema[];
}
class App extends React.Component<any,Appstate>{
    state={
        searchField:"",
    allPokemons:[],
    selectedPokemon:undefined,
    searchedPokemons:[]
    }
    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing sprites: ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,                      //for each pokemon in unpatchedpokemonschema set speites
                                                 //to paresedsprites
                sprites: parsedSprites,
            };

            return patchedPokemon;
        });
        return patchedPokemons;
    }
    componentDidMount(){
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData( //this method is present above didmount
            pokemonData  //this is retrned from data folder
        );
console.log(patchedPokemons);
        // Update the state with patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons,
        });
    }
    render()
    {
        return (
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedx
                   
                />
                
            </div>
        );
    }
}
export default App;