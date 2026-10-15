import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Dental care in Bermondsey/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the call button', () => {
    render(<App />);
    const callButtons = screen.getAllByRole('button', {
      name: /Call: 020 7394 1593/i,
    });
    expect(callButtons.length).toBeGreaterThan(0);
  });

  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services & Pricing')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders pricing information', () => {
    render(<App />);
    expect(screen.getByText('NHS dental fees')).toBeInTheDocument();
    expect(screen.getAllByText('£27.90').length).toBeGreaterThan(0);
    expect(screen.getByText('£76.60')).toBeInTheDocument();
    expect(screen.getByText('£332.10')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<App />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('134 Grange Rd')).toBeInTheDocument();
    expect(screen.getAllByText('020 7394 1593').length).toBeGreaterThan(0);
  });

  test('call button triggers phone link', () => {
    render(<App />);
    const callButtons = screen.getAllByRole('button', {
      name: /Call: 020 7394 1593/i,
    });
    callButtons.forEach(callButton => {
      expect(callButton).toHaveAttribute('href', 'tel:02073941593');
    });
  });

  test('practice email opens a new email message', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: 'thegrangedental@hotmail.com' })
    ).toHaveAttribute('href', 'mailto:thegrangedental@hotmail.com');
  });

  test('Google Maps button is present', () => {
    render(<App />);
    const mapsButton = screen.getByRole('button', {
      name: /View on Google Maps/i,
    });
    expect(mapsButton).toBeInTheDocument();
  });
});

describe('App Accessibility', () => {
  test('has proper heading hierarchy', () => {
    render(<App />);
    const h1Elements = screen.getAllByRole('heading', { level: 1 });
    const h2Elements = screen.getAllByRole('heading', { level: 2 });

    expect(h1Elements.length).toBeGreaterThan(0);
    expect(h2Elements.length).toBeGreaterThan(0);
  });

  test('buttons have accessible names', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');

    buttons.forEach(button => {
      expect(button).toHaveAccessibleName();
    });
  });
});
