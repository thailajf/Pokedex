import React from 'react';
import PropTypes from 'prop-types';

import { Container, DataList, Label, Data } from './styles';

export default function PokemonData({ label, data }) {
  return (
    <Container>
      <DataList>
        {label ? <Label data-testid="pokemon-label">{label}: </Label> : ''}
        <Data data-testid="pokemon-data">{data}</Data>
      </DataList>
    </Container>
  );
}

PokemonData.propTypes = {
  data: PropTypes.string.isRequired,
  label: PropTypes.string,
};

PokemonData.defaultProps = {
  label: '',
};
