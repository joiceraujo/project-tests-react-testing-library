import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste o componente Pokedex', () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);
  });

  test('Teste se a página contém um heading h2 com texto Encountered pokémons', () => {
    const textPokemons = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });
    expect(textPokemons).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    const nextPokemon = screen.getByTestId(/next-pokemon/i);
    expect(nextPokemon).toBeInTheDocument();
    userEvent.click(nextPokemon);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    const buttons = screen.getByRole('button', { name: /electric/i });
    const pokemonId = screen.getAllByTestId(/pokemon-type-button/i);
    expect(buttons).toBeDefined();
    userEvent.click(buttons);
    expect(pokemonId).toBeDefined();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const buttonReset = screen.getByRole('button', { name: /All/i });
    expect(buttonReset).toBeInTheDocument();
    userEvent.click(buttonReset);
  });
});
