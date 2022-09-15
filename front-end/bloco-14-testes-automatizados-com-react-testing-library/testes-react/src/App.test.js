import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Verifica se existe um input email na tela', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText(/email/i);
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email")
});

test('Verifica se existe dois botão', () => {
  render(<App />)

  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(2);
})

test('Verifica se existe o botão de "Enviar"', () => {
  render(<App />)

  const button = screen.getByTestId('id-send')
  expect(button).toBeInTheDocument();
  expect(button).toHaveValue("Enviar");
})

test('Verificado se o botão e o campo email estão funcionando', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);
})
