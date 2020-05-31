import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import api from '../../Services/api';
import { AddPokemonState } from '../../Store/modules/Pokemon/actions';
import {
  Container,
  PokemonList,
  Pokemon,
  Name,
  Image,
  ButtonContainer,
  Button,
  BtnContainer,
} from './styles';
import store from '../../Store';
import { Colors } from '../../Styles/Colors';
import LoadingAction from '../../Components/Loading';

export default function Home() {
  const [Pokemons, setPokemons] = useState('');
  const [NextPage, setNextPage] = useState();
  const [PrevPage, setPrevPage] = useState();
  const [RouteApi, setRouteApi] = useState('pokemon');
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePokemons = async () => {
    try {
      let response = await api.get(RouteApi);
      response = response.data;
      const pokemonData = response.results;
      const pokemon = await Promise.all(
        pokemonData.map(async (p) => {
          const { data } = await api.get(`pokemon/${p.name}`);

          return data;
        })
      );

      await setPokemons(pokemon);

      if (Pokemons !== pokemon) {
        setLoading(false);
      }

      setNextPage(response.next);
      setPrevPage(response.previous);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePokemons();
  }, [Loading]);

  const handleNextPage = async () => {
    setLoading(true);
    setRouteApi(NextPage);
    await handlePokemons();
  };

  const handlePrevPage = async () => {
    setLoading(true);
    setRouteApi(PrevPage);
    await handlePokemons();
  };

  function handlePokemonData(pokemon) {
    dispatch(AddPokemonState(pokemon));
    const { loading } = store.getState().Pokemon;
    if (loading === false) {
      history.push('/pokemon');
    }
  }

  return (
    <Container>
      {Loading ? (
        <LoadingAction />
      ) : (
        <>
          <PokemonList>
            {Pokemons.map((p) => (
              <Pokemon
                data-testid="pokemon-card"
                key={p.id}
                onClick={() => handlePokemonData(p)}
              >
                <Image src={p.sprites.front_default} />
                <Name>{p.name}</Name>
              </Pokemon>
            ))}
          </PokemonList>
          <ButtonContainer>
            {PrevPage ? (
              <BtnContainer onClick={handlePrevPage}>
                <Button icon="FaArrowLeft" size={22} color={Colors.red} />
              </BtnContainer>
            ) : (
              ''
            )}

            {NextPage ? (
              <BtnContainer onClick={handleNextPage}>
                <Button icon="FaArrowRight" size={22} color={Colors.red} />
              </BtnContainer>
            ) : (
              ''
            )}
          </ButtonContainer>
        </>
      )}
    </Container>
  );
}
