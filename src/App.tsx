import "./App.css";
import List from "./components/List";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="container">
      <Pokemon />
      <List />
    </div>
  );
}

export default App;
