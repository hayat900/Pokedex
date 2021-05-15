import React from 'react';
import Pokedx from '../Pokedx/pokedx';
import PokeSearchResult from '../Poksearchresults/poksearch';
import './App.css';
class App extends React.Component{
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