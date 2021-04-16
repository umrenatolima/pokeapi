import React, { useCallback, useEffect, useMemo } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Loading from 'react-loading';
import { useHistory, useParams } from 'react-router-dom';

import Card from '../../components/Card';
import HoloCard from '../../components/HoloCard';
import StatsTable from '../../components/StatsTable';
import { usePokedex } from '../../hooks/usePokedex';
import {
  AnimationContainer,
  Content,
  DetailsContainer,
  Header,
  ImageContainer,
} from './styles';

interface PokemonDetailsParams {
  id?: string;
}

const PokemonDetails: React.FC = () => {
  const { id } = useParams<PokemonDetailsParams>();
  const history = useHistory();

  const { fetchByName, data, isLoading } = usePokedex();

  useEffect(() => {
    fetchByName(id as string);
  }, [id]);

  const handleOnBackButtonClick = useCallback(() => {
    history.push('/');
  }, [history]);

  const pokemonInfo = useMemo(() => {
    if (data[0]) {
      return {
        name: data[0].name,
        imgURL: data[0].imgURL,
        id: data[0].id,
        stats: data[0].stats,
        types: data[0].types,
      };
    }

    return data[0];
  }, [data]);

  return (
    <DetailsContainer>
      <AnimationContainer>
        <Header>
          <button type="button" onClick={handleOnBackButtonClick}>
            <FaArrowCircleLeft size={60} />
          </button>
          <h1>Pokedex</h1>
        </Header>

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
