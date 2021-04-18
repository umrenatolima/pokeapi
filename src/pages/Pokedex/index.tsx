import React from 'react';

import Header from '../../components/Header';
import PokeList from '../../components/PokeList';
import SearchBar from '../../components/SearchBar';
import { AnimationContainer, PokedexContainer } from './styles';

const Pokedex: React.FC = () => (
  <PokedexContainer>
    <AnimationContainer>
      <Header />
      <SearchBar />

      <PokeList />
    </AnimationContainer>
  </PokedexContainer>
);

export default Pokedex;
