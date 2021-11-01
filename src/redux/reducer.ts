const INITIAL_STATE = {
  pokemon: "Nenhum pokemon selecionado",
};

type ActionType = {
  type: string;
  payload: string;
};

export const reducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "SET_POKEMON_NAME":
      return { ...state, pokemon: action.payload };

    default:
      return { ...state };
  }
};
