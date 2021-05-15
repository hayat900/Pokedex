import React from "react";
import Pokecard from '../Pokecard/Pokecard';
import "./Pokelist.css";



const Pokelist = () => {
    return (
        <div className="pokelist">
           <Pokecard name="Tyrannosaurus Rex"/>

           
           <Pokecard name=" Stegosaurus"/>
               
           
           <Pokecard name="Triceratops"/>
               
          
           <Pokecard name="Velociraptor"/>
               
           
           <Pokecard name="Spinosaurus"/>
               
          
        </div>
    );
};

export default Pokelist;