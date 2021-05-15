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
    handleInputChange = (inputValue: string) => {
        //const searchField = inputValue;

        

        const searchedPokemons = this.state.allPokemons.filter(
            (pokemon: PokemonSchema) => {
                
                    if(pokemon.name) 
                    {
                        return(
                            pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
                            );
                    }
            }
        );

        this.setState({ searchField:inputValue, searchedPokemons:searchedPokemons });



    }


    handleClick = (pokemonName: string) => {
        const { allPokemons } = this.state;

        // Find the selected pokemon from allPokemons
        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName
        );

        // Update the state
        this.setState({ selectedPokemon });
    };
    componentDidMount(){
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData( //this method is present above didmount
            pokemonData  //this is retrned from data folder
        );

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
                <h4>Hello there,welcome to the pokedex application.Search your favorite pokemons and click on the card to know more!!</h4>
                
                <Pokedx 
                  searchedPokemons={this.state.searchedPokemons}
                  onInputChange={this.handleInputChange}
                  onPokemonClick={this.handleClick}
                  selectedPokemon={this.state.selectedPokemon}
                />
                
            </div>
        );
    }
}
export default App;