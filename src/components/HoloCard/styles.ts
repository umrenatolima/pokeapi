import styled from 'styled-components';

export const HoloCardContainer = styled.div`
  height: 450px;
  width: 450px;

  border: 2px solid #ffdd56;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  margin: 20px 10px;

  @media screen and (max-width: 1280px) {
    height: 300px;
    width: 300px;
  }
`;
