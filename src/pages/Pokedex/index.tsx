import React from 'react';

import Header from '../../components/Header';
import PokeList from '../../components/PokeList';
import SearchBar from '../../components/SearchBar';
import { AnimationContainer } from './styles';

const Pokedex: React.FC = () => (
  <section>
    <AnimationContainer>
      <Header />
      <SearchBar />

      <PokeList />
    </AnimationContainer>
  </section>
);

export default Pokedex;
