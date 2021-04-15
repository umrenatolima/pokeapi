import React, { useCallback, useEffect } from 'react';
import Loading from 'react-loading';
import { useParams, useHistory } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

import HoloCard from '../../components/HoloCard';
import { usePokedex } from '../../hooks/usePokedex';

import {
  DetailsContainer,
  ImageContainer,
  Header,
  AnimationContainer,
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
        {!isLoading && data[0] && (
          <HoloCard>
            <ImageContainer>
              <img src={data[0].imgURL} alt={`${data[0].name} sprite`} />
            </ImageContainer>
            <h3>{data[0].name}</h3>
          </HoloCard>
        )}
      </AnimationContainer>
    </DetailsContainer>
  );
};

export default PokemonDetails;
