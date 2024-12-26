import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Search from './Components/SearchComponent';

test('renders the input field and search button', () => {
  render(<App />);
  const inputElement = screen.getByTestId(/search-pokemon-input/i);
  const buttonElement = screen.getByTestId(/search-pokemon-button/i);
  const cardElement = screen.queryByTestId(/pokemon-card/i);

  
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(cardElement).not.toBeInTheDocument();
});


test("renders pokemon card when valid pokemon is searched", async () => {
  render(<App />);

  // Query the input field and button
  const inputElement = screen.getByTestId(/search-pokemon-input/i);
  const buttonElement = screen.getByTestId(/search-pokemon-button/i);

  // Simulate typing "pikachu" and clicking the button
  fireEvent.change(inputElement, { target: { value: "pikachu" } });
  fireEvent.click(buttonElement);

  // Assert that the pokemon-card is rendered
  const cardElement = await screen.findByTestId(/pokemon-card/i); // Wait for the card to appear
  expect(cardElement).toBeInTheDocument();

});

test("shows error message when invalid pokemon is searched", async () => {
  render(<App />);

  // Query the input field and button
  const inputElement = screen.getByTestId(/search-pokemon-input/i);
  const buttonElement = screen.getByTestId(/search-pokemon-button/i);

  // Simulate typing "pikashu" (typo) and clicking the button
  fireEvent.change(inputElement, { target: { value: "pikashu" } });
  fireEvent.click(buttonElement);

  // Assert that the pokemon-card is not rendered
  const cardElement = screen.queryByTestId(/pokemon-card/i);
  expect(cardElement).not.toBeInTheDocument();

});
