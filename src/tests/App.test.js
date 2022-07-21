import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Teste o componente App', () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);
  });
  test('Se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();

    const favoriteLink = screen.getByText(/Favorite Pokémons/i);
    expect(favoriteLink).toBeInTheDocument();

    userEvent.click(homeLink);
    userEvent.click(aboutLink);
    userEvent.click(favoriteLink);
  });
});
