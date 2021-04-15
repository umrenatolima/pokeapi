import styled from 'styled-components';
import DefaultButton from '../Button';

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  margin-bottom: 30px;
`;

export const Button = styled(DefaultButton)`
  margin-left: 30px;
  width: 200px;
`;

export const FavoritesButton = styled.button`
  margin-left: 15px;

  svg {
    height: 100%;
  }
`;
