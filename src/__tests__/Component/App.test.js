import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Button from '../../Components/Button';
import PokemonData from '../../Components/PokemonData';
import api from '../../Services/api';

afterEach(cleanup);

describe('Components on pages', () => {
  it('should be able to render a button with a correct propType', () => {
    const div = document.createElement('div');
    ReactDom.render(<Button icon="FaArrowLeft" size={20} color="gray" />, div);
  });
  it('should be able to render a PokemonData with a correct propType', () => {
    const { getByTestId } = render(<PokemonData label="Height" data="20cm" />);
    expect(getByTestId('pokemon-data')).toHaveTextContent('20cm');
    expect(getByTestId('pokemon-label')).toHaveTextContent('Height');
  });

  it('should be run Api', () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('pokemon').reply(200);
  });
});
