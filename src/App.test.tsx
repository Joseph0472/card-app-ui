import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content';
import HomeScreen from './views/HomeScreen';
import MenuScreen from './views/MenuScreen';

// Rendering tests
test('renders home screen page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders user data', () => {
  const initialUserData = {
    FirstName: "Jeff",
    LastName: "Jiang"
  };

  render(<Content initialUserData={initialUserData} />);

  const firstNameElement = screen.getByText(/Jeff/i);

  expect(firstNameElement).toBeInTheDocument();
});

// Test routing
const TestComponent = () => {
  return (
    <MemoryRouter initialEntries={['/', '/menu']}>
      <div>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/menu" Component={MenuScreen} />
      </Routes>
      </div>
    </MemoryRouter>
  );
};

test('renders HomeScreen component when navigating to /', () => {
  const { getByTestId } = render(<TestComponent />);
  const homeScreen = getByTestId('home-screen');
  console.log(homeScreen)
  expect(homeScreen).toBeInTheDocument();
});