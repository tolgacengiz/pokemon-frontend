import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

// Smart - it handles the business logic
const PokemonListContainer = () => {
    // IDLE, STARTED, SUCCEED, FAILED
    const [fetchStatus, updateFetchStatus] = useState('IDLE');
    const [fetchError, setFetchError] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        updateFetchStatus('STARTED');

        fetch('https://frozen-sands-71650.herokuapp.com/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokemonList(data);
                updateFetchStatus('SUCCEED');
            })
            .catch(err => { // new Error('message') -> err.message
                setFetchError(err.message);
                updateFetchStatus('FAILED');
            })
    }, []);

    return (
        <PokemonList
            fetchStatus={fetchStatus}
            pokemonList={pokemonList}
            fetchError={fetchError}
        />
    )
}

export default PokemonListContainer;

/*
import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

const PokemonListContainer = () => {
  // IDLE, STARTED, SUCCEED, FAILED
  const [fetchStatus, updateFetchStatus] = useState('IDLE');
  const [fetchError, setFetchError] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
      updateFetchStatus('STARTED');

      fetch('https://afternoon-springs-80723.herokuapp.com/pokemon')
          .then(response => response.json())
          .then(data => {
              setPokemonList(data);
              updateFetchStatus('SUCCEED');
          })
          .catch(err => { // new Error('message') -> err.message
              setFetchError(err.message);
              updateFetchStatus('FAILED');
          })
  }, []);

  return (
      <PokemonList
          fetchStatus={fetchStatus}
          pokemonList={pokemonList}
          fetchError={fetchError}
      />
  )
}

export default PokemonListContainer; */