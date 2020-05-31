import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Pokemon,
  Image,
  Name,
  InfoContainer,
  Info,
  Title,
  DataContainer,
  BtnContainer,
  BackContainer,
} from './styles';
import PokemonData from '../../Components/PokemonData';
import Button from '../../Components/Button';
import { Colors } from '../../Styles/Colors';
import LoadingAction from '../../Components/Loading';

export default function PokemonPage() {
  const { pokemon, loading } = useSelector((state) => state.Pokemon);

  const [ImageStatus, setImageStatus] = useState(true);
  const history = useHistory();

  const handleInitialize = () => {
    if (pokemon == null) {
      history.push('/');
    }
  };

  useEffect(() => {
    handleInitialize();
  }, []);

  const handlePokemonImage = () => {
    if (ImageStatus) {
      setImageStatus(false);
    } else {
      setImageStatus(true);
    }
  };
  return (
    <Container>
      {loading ? (
        <LoadingAction />
      ) : (
        <>
          <InfoContainer>
            <BackContainer
              to={{
                pathname: '/',
              }}
            >
              <Button icon="FaArrowLeft" size={22} color={Colors.red} />
            </BackContainer>
            <Pokemon>
              <BtnContainer onClick={handlePokemonImage}>
                <Button icon="FaSyncAlt" size={22} color={Colors.red} />
              </BtnContainer>
              {ImageStatus ? (
                <Image src={pokemon.sprites.front_default} />
              ) : (
                <Image src={pokemon.sprites.back_default} />
              )}

              <Name>{pokemon.name}</Name>
              <DataContainer>
                <DataContainer>
                  <PokemonData label="Height" data={`${pokemon.height}cm`} />
                </DataContainer>
                <DataContainer>
                  <PokemonData label="Weight" data={`${pokemon.weight}kg`} />
                </DataContainer>
              </DataContainer>
            </Pokemon>
          </InfoContainer>
          <InfoContainer>
            <Info>
              <Title>Types</Title>
              {pokemon.types.map((p) => (
                <PokemonData label="" data={p.type.name} />
              ))}
            </Info>
            <Info>
              <Title>Status Base</Title>
              <DataContainer>
                {pokemon.stats.map((p) => (
                  <PokemonData label={p.stat.name} data={`'${p.base_stat}'`} />
                ))}
              </DataContainer>
            </Info>
            <Info>
              <Title>Abilities</Title>
              <DataContainer>
                {pokemon.abilities.map((p) => (
                  <PokemonData label="" data={p.ability.name} />
                ))}
              </DataContainer>
            </Info>
          </InfoContainer>
        </>
      )}
    </Container>
  );
}
