import produce from 'immer';

const INITIAL_STATE = {
  pokemon: null,
  loading: true,
};

export default function Pokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@Pokemon/ShowPokemon':
      return produce(state, (draft) => {
        draft.pokemon = action.payload;
        draft.loading = false;
      });
    default:
      return state;
  }
}
