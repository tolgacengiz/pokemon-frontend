import React from 'react';

import PokeFight from '../components/PokeFight';
import './PokeFightPage.css';

const PokeFightPage = () => {
    return (
        <div className="poke-fight-page">
            <h1>Pokemons</h1>
            <PokeFight />
        </div>
    );
}

export default PokeFightPage;