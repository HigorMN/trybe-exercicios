import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input email na tela', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText(/email/i);
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email")
});

test('verifica se existe um botão', () => {
  render(<App />)
})

//acesar os elementos da tela
