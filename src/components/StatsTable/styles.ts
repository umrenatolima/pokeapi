import styled from 'styled-components';

export const StatsList = styled.ul`
  list-style: none;
`;

export const ListITem = styled.li`
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;

  p {
    &:first-child {
      margin-right: 10px;
    }

    &:last-child {
      color: #ffdd56;
    }
  }
`;
