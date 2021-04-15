import React from 'react';

import { HoloCardContainer } from './styles';

const HoloCard: React.FC = ({ children }): JSX.Element => (
  <HoloCardContainer>{children}</HoloCardContainer>
);

export default HoloCard;
