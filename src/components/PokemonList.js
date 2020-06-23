import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './PokemonList.css';

const PokemonList = (props) => {
    const match = useRouteMatch();

    const {
        fetchStatus,
        pokemonList,
        fetchError
    } = props;

    if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
        return (
            <div className="pokemon-list">
                Loading...
            </div>
        )
    }

    if (fetchStatus === 'SUCCEED') {
        return (
            <div className="pokemon-list">
                <pre className="22">
                    {pokemonList.map(pokemon => (
                        <div className="pokemon-list-item">
                            <Link to={`${match.url}/${pokemon.id}`}>
                                {pokemon.name.english}
                            </Link>
                        </div>
                    ))}
                </pre>
            </div>
        )
    }

    // ERROR
    return (
        <div className="pokemon-list">
            Sorry, error occurred:

            <pre className="pokemon-list">
                {fetchError}
            </pre>
        </div>
    );
};

export default PokemonList;