import React, { useCallback, useEffect, useMemo } from 'react';
import Loading from 'react-loading';
import { useParams, useHistory } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

import HoloCard from '../../components/HoloCard';
import { usePokedex } from '../../hooks/usePokedex';

import {
  DetailsContainer,
  Header,
  AnimationContainer,
  CardContainer,
} from './styles';
import Card from '../../components/Card';

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
          <CardContainer>
            <HoloCard>
              <img
                src={pokemonInfo.imgURL}
                alt={`${pokemonInfo.name} sprite`}
              />
              <Card>
                <h3>{pokemonInfo.name}</h3>
                {pokemonInfo.types && (
                  <ul>
                    {pokemonInfo.types &&
                      pokemonInfo.types.map(({ type }) => (
                        <li key={`${type.name}`}>{type.name}</li>
                      ))}
                  </ul>
                )}
              </Card>
            </HoloCard>
          </CardContainer>
        )}
      </AnimationContainer>
    </DetailsContainer>
  );
};

export default PokemonDetails;
