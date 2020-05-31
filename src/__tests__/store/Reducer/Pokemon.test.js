import reducer, { INITIAL_STATE } from '../../../Store/modules/Pokemon/reducer';

import * as Pokemon from '../../../Store/modules/Pokemon/actions';

describe('Pokemon Reducer', () => {
  it('Show Pokemon', () => {
    const data = {
      id: 1,
      name: 'chlorophyll',
      height: 7,
      weight: 69,
    };
    const state = reducer(INITIAL_STATE, Pokemon.AddPokemonState(data));
    expect(state).toEqual({
      loading: false,
      pokemon: { id: 1, name: 'chlorophyll', height: 7, weight: 69 },
    });
  });
});
