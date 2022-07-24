import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente Pokemon', () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);
  });

  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toBeInTheDocument();

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toBeInTheDocument();
    expect(typePokemon).toContainHTML('Electric');

    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toBeInTheDocument();
    expect(weightPokemon).toContainHTML('Average weight: 6.0 kg');

    const imgPokemon = screen.getByAltText(/Pikachu sprite/i);
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon).toHaveAttribute('src', imgSrc);
  });

  test('Teste se o card do pokémon indicado na Pokédex contém link de navegação', () => {
    const pageDetails = screen.getByRole('link', { name: /more details/i });
    expect(pageDetails).toBeInTheDocument();
    userEvent.click(pageDetails);
    const allDetails = screen.getByText(/Pikachu Details/i);
    expect(allDetails).toBeInTheDocument();
  });

  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    const pageDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pageDetails);
    const favorites = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(favorites);
    const imgStarIcon = screen.getByAltText(/Pikachu is marked/i);
    expect(imgStarIcon).toBeInTheDocument();
    expect(imgStarIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
