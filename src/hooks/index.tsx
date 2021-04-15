import React from 'react';

import { PokedexProvider } from './usePokedex';

const AppProvider: React.FC = ({ children }) => (
  <PokedexProvider>{children}</PokedexProvider>
);

export default AppProvider;
