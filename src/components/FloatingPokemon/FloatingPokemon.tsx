import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./FloatingPokemon.css";

type RootState = {
  pokemon: string;
};

const FloatingPokemon = () => {
  const [pokemon, setPokemon] = useState("");

  const pokemonName = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    setPokemon(pokemonName);
  }, [pokemonName]);

  return <div className="floating-pokemon">{pokemon}</div>;
};

export default FloatingPokemon;
