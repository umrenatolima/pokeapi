import React, { useCallback } from 'react';

import { FaArrowCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from './styles';

interface HeaderProps {
  hasBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasBackButton = false }) => {
  const history = useHistory();

  const handleOnBackButtonClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <HeaderContainer>
      {hasBackButton && (
        <button type="button" onClick={handleOnBackButtonClick}>
          <FaArrowCircleLeft size={60} />
        </button>
      )}
      <h1>Pokedex</h1>
    </HeaderContainer>
  );
};

export default Header;
