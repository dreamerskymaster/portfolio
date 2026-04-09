import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('CI/CD Smoke Test', () => {
  it('verifies the test environment is functional', () => {
    render(<div data-testid="smoke-test">ManuFX Portfolio</div>);
    const element = screen.getByTestId('smoke-test');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('ManuFX Portfolio');
  });
});
