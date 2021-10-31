import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pokemon from "./Pokemon";

const abilitiesMock = [
  {
    ability: {
      name: "Ability 1",
      url: "https://ability.com/ability1",
    },
  },
  {
    ability: {
      name: "Ability 2",
      url: "https://ability.com/ability2",
    },
  },
];

describe("When the user enter a valid pokemon name", () => {
  it("should show the pokemon abilities", async () => {
    jest.fn().mockResolvedValueOnce({ data: { abilitiesMock } });
    render(<Pokemon />);

    userEvent.type(screen.getByTestId("pokemon-input"), "ditto");
    userEvent.click(screen.getByTestId("pokemon-button"));

    const returnedAbilities = await screen.findAllByRole("listitem");
    expect(returnedAbilities).toHaveLength(2);
  });
});

describe("When the user enter a invalid pokemon name", () => {
  it("should display an error message if an invalid name is entered", async () => {
    jest.fn().mockRejectedValueOnce(new Error());
    render(<Pokemon />);

    userEvent.type(screen.getByTestId("pokemon-input"), "invalid-pokemon-name");
    userEvent.click(screen.getByTestId("pokemon-button"));

    const errorMessage = await screen.findByText(/Pokemon não encontrado/);
    expect(errorMessage).toBeInTheDocument();
  });

  it("button should be disabled if the pokemon input is blank", () => {
    render(<Pokemon />);

    userEvent.type(screen.getByTestId("pokemon-input"), "  ");

    const pokemonButton = screen.getByTestId("pokemon-button");
    expect(pokemonButton).toBeDisabled();
  });
});
