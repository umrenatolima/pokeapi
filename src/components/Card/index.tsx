import React from 'react';

import { CardContainer } from './styles';

interface CardProps {
  containerClassName?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  containerClassName,
}): JSX.Element => (
  <CardContainer className={containerClassName || ''}>{children}</CardContainer>
);

export default Card;
