import { ChangeEvent, useState } from "react";
import "./Pokemon.css";

const pokeAPIUrl = "https://pokeapi.co/api/v2";

type Ability = {
  ability: {
    name: string;
    url: string;
  };
};

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      const result = await fetch(
        `${pokeAPIUrl}/pokemon/${pokemonName.toLocaleLowerCase()}`
      );
      const pokeAbilities = await result.json();
      setPokemonAbilities(pokeAbilities.abilities);
      setError("");
    } catch (error: any) {
      setPokemonAbilities([]);
      setError("Pokemon não encontrado");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className="pokemon-container">
      <h1>✨ Buscador de Habilidades do Pokemon</h1>
      <div className="list-form">
        <input
          value={pokemonName}
          onChange={handleChange}
          type="text"
          data-testid="pokemon-input"
          placeholder="Digite o nome do pokemon aqui..."
          title="Tente 'pikachu'"
        />
        <button
          type="button"
          disabled={pokemonName.trim() === ""}
          className="blue-button"
          data-testid="pokemon-button"
          onClick={handleFetch}
        >
          Atualizar
        </button>
      </div>
      <span>{error}</span>
      <ul>
        {pokemonAbilities.map((ability) => (
          <li key={ability.ability.name}>
            {ability.ability.name}
            <a href={ability.ability.url} target="_blank" rel="noreferrer">
              Saiba mais ▶
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
