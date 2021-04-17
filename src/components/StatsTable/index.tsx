import React from 'react';

import { StatsList, ListITem } from './styles';
import { Stats } from '../../types/Pokemon';

interface StatsTableProps {
  stats: Stats[];
  containerClassName?: string;
}

const StatsTable: React.FC<StatsTableProps> = ({
  stats,
  containerClassName,
}) => (
  <StatsList className={containerClassName || ''}>
    {stats.map(stat => (
      <ListITem key={stat.stat.name}>
        <p>{stat.stat.name}</p>
        <p>{stat.base_stat}</p>
      </ListITem>
    ))}
  </StatsList>
);

export default StatsTable;
