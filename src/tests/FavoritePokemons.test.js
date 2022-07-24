import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Teste o componente Favorite Pokemons', () => {
  beforeEach(() => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);
    });
  
test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
    const favoritePokemons = screen.getByText(/No favorite pokemon found/i);
    expect(favoritePokemons).toBeInTheDocument();
});
});