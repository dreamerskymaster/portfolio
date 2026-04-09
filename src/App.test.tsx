import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock analytics to avoid external calls during tests
vi.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
}));

vi.mock('@vercel/speed-insights/react', () => ({
  SpeedInsights: () => null,
}));

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Check for a core element like skip to content or a header element
    const skipLink = screen.getByText(/Skip to content/i);
    expect(skipLink).toBeInTheDocument();
  });
});
