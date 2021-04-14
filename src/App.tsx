import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <Routes />

    <GlobalStyle />
  </div>
);

export default App;
