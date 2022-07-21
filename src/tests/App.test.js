import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('Teste o componente App', () => {
  test('Se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    render(<App />);

    const homeLink = screen.getByRole('Link', {
      name: /Home/i,
    });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('Link', {
      name: /About/i,
    });

    expect(aboutLink).toBeInTheDocument();

    const favoriteLink = screen.getByRole('Link', {
      name: /Favorite Pokémons/i,
    });

    expect(favoriteLink).toBeInTheDocument();
  });
});

test('Teste se a aplicação é redirecionada para a página inicial', () => {
  const { history } = render(<App />);
  const homeLink = screen.getByRole('Link', {
    name: /Home/i,
  });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');
});
