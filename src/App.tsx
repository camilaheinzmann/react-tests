import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import List from "./components/List";
import Pokemon from "./components/Pokemon";
import FloatingPokemon from "./components/FloatingPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Pokemon />
        <List />
        <FloatingPokemon />
      </div>
    </Provider>
  );
}

export default App;
