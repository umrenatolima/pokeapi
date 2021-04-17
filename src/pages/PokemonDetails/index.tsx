import React, { useEffect, useMemo } from 'react';
import Loading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import HoloCard from '../../components/HoloCard';
import StatsTable from '../../components/StatsTable';
import { selectPokemons, getPokemonsByName } from '../../redux/pokemons';
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
  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector(selectPokemons);
  const { id } = useParams<PokemonDetailsParams>();

  useEffect(() => {
    dispatch(getPokemonsByName(id as string));
  }, [id, dispatch]);

  const pokemonInfo = useMemo(() => {
    if (pokemons && pokemons[0]) {
      return {
        name: pokemons[0].name,
        imgURL: pokemons[0].imgURL,
        id: pokemons[0].id,
        stats: pokemons[0].stats,
        types: pokemons[0].types,
      };
    }

    return null;
  }, [pokemons]);

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
