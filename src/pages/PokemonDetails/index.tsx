import React, { useEffect, useMemo } from 'react';
import Loading from 'react-loading';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import HoloCard from '../../components/HoloCard';
import StatsTable from '../../components/StatsTable';
import { usePokedex } from '../../hooks/usePokedex';
import {
  AnimationContainer,
  Content,
  DetailsContainer,
  ImageContainer,
} from './styles';

interface PokemonDetailsParams {
  id?: string;
}

const PokemonDetails: React.FC = () => {
  const { id } = useParams<PokemonDetailsParams>();

  const { fetchByName, data, isLoading } = usePokedex();

  useEffect(() => {
    fetchByName(id as string);
  }, [id]);

  const pokemonInfo = useMemo(() => {
    if (data && data[0]) {
      return {
        name: data[0].name,
        imgURL: data[0].imgURL,
        id: data[0].id,
        stats: data[0].stats,
        types: data[0].types,
      };
    }

    return null;
  }, [data]);

  return (
    <DetailsContainer>
      <AnimationContainer>
        <Header hasBackButton />

        {isLoading && <Loading />}
        {!isLoading && pokemonInfo && (
          <Content>
            <HoloCard>
              <ImageContainer>
                <img
                  src={pokemonInfo.imgURL}
                  alt={`${pokemonInfo.name} sprite`}
                />
              </ImageContainer>
            </HoloCard>

            <Card containerClassName="info-table">
              <h3>{pokemonInfo.name}</h3>
              {pokemonInfo.types && (
                <ul className="list-types">
                  {pokemonInfo.types.map(({ type }) => (
                    <li key={`${type.name}`}>{type.name}</li>
                  ))}
                </ul>
              )}
            </Card>

            {pokemonInfo.stats && (
              <StatsTable
                containerClassName="stats-table"
                stats={pokemonInfo.stats}
              />
            )}
          </Content>
        )}
      </AnimationContainer>
    </DetailsContainer>
  );
};

export default PokemonDetails;
