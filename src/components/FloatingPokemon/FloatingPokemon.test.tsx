import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "../../redux/store";
import FloatingPokemon from ".";
import Pokemon from "../Pokemon";

describe("When the user enter a valid pokemon name", () => {
  it("should display the pokemon name", async () => {
    render(
      <Provider store={store}>
        <Pokemon />
        <FloatingPokemon />
      </Provider>
    );

    userEvent.type(screen.getByTestId("pokemon-input"), "pikachu");
    userEvent.click(screen.getByTestId("pokemon-button"));

    const floatingPokeName = await screen.findByText(/pikachu/);
    expect(floatingPokeName).toBeInTheDocument();
  });
});

describe("When the user enter a invalid pokemon name", () => {
  it("should display message of no pokemon selected", async () => {
    render(
      <Provider store={store}>
        <Pokemon />
        <FloatingPokemon />
      </Provider>
    );

    userEvent.type(screen.getByTestId("pokemon-input"), "invalid-pokemon-name");
    userEvent.click(screen.getByTestId("pokemon-button"));

    const floatingPokeName = await screen.findByText(
      /Nenhum pokemon selecionado/
    );
    expect(floatingPokeName).toBeInTheDocument();
  });
});
