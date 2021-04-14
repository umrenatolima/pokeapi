import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import PokemonDetails from '../pages/PokemonDetails';

const Routes: React.FC = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Pokedex} />
    <Route exact path="/pokemon/:id" component={PokemonDetails} />
  </Switch>
);

export default Routes;
