import React from 'react';

import PokeList from '../../components/PokeList';
import SearchBar from '../../components/SearchBar';

import { AnimationContainer } from './styles';

const Pokedex: React.FC = () => {
  return (
    <section>
      <AnimationContainer>
        <h1>Pokedex</h1>
        <SearchBar />

        <PokeList />
      </AnimationContainer>
    </section>
  );
};

export default Pokedex;
