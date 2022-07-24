import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('Teste o componente NotFound', () => {
  beforeEach(() => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
  });

  test('Teste se a página contém um heading h2 com texto Page requested not found', () => {
    const textNotFound = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(textNotFound).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem', () => {
    const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imgAlt = 'Pikachu crying because the page requested was not found';
    const img = screen.getByAltText(imgAlt);
    expect(img).toHaveAttribute('src', imgSrc);
  });
});
