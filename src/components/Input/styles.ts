import styled, { css } from 'styled-components';

interface ContainerProps {
  hasFocus: boolean;
  hasValue: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.hasFocus &&
    css`
      color: #ffdd56;
      border-color: #ffdd56;
    `}

  ${props =>
    props.hasValue &&
    css`
      color: #ffdd56;
    `}

  input {
    color: #f4ede8;
    background: transparent;
    border: 0;

    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }
`;
