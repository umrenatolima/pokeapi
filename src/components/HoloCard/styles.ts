import styled from 'styled-components';

export const HoloCardContainer = styled.div`
  width: 40vw;
  height: 40vh;
  background-color: #9e0000;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 20px 10px;

  > span {
    position: relative;
    top: 45%;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 200% 200%;
    mix-blend-mode: color-dodge;
    opacity: 0.2;
    z-index: 1;
    animation: holoGradient 15s ease infinite;
  }

  &.active:before,
  &.active:after {
    animation: none;
  }

  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(3) {
    width: 40vw;
    height: 60vh;
    box-shadow: 0 0 1px 1px rgba(white, 0.4),
      0 25px 15px -10px rgba(0, 0, 0, 0.5);
  }
`;
