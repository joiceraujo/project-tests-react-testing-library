import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente Favorite Pokemons', () => {
  beforeEach(() => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);
});
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
        const noFavorite = screen.getByText(/No favorite pokemon found/i);
        expect(noFavorite).toBeInTheDocument();
    });
});
