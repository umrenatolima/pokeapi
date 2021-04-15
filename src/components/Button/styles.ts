import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ffdd56;
  border-radius: 10px;
  border: 0;
  color: #312e38;

  padding: 0 16px;
  width: 100%;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ffdd56')};
  }
`;
