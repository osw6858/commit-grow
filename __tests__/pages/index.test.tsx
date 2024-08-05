import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@app/page';

describe('Home page', () => {
    it('renders a heading', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    });
});