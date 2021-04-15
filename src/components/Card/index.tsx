import React from 'react';

import { PokemonCard } from './styles';

const Card: React.FC = ({ children }): JSX.Element => (
  <PokemonCard>{children}</PokemonCard>
);

export default Card;
