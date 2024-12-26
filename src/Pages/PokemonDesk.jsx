import React, { useState} from 'react'
import Search from '../Components/SearchComponent';
import PokemonCard from '../Components/PokemonComponent'; 
import PokedexLogo from "../assets/Pokedex_logo.png";

function PokemonDesk() {

    const [pokemonData, setPokemonData] = useState(null);

    const handleSearch = (data) => {
        setPokemonData(data);
    };


    return (
        <>
        <main className='container mx-auto py-4'>
            <div className="image-container">
                <a href="void:javascript(0)" className='flex items-center max-w-lg mx-auto justify-center'>
                    <img
                        src={PokedexLogo}
                        alt="PokeDex logo"
                    />
                </a>
            </div>
            <Search onSearch={handleSearch} />
        
            {pokemonData && (
                <div className = "flex items-center max-w-lg mx-auto justify-center">
                    <PokemonCard pokemon={pokemonData} />
                </div>
            )}
        </main>
        </>
    );


}

export default PokemonDesk
