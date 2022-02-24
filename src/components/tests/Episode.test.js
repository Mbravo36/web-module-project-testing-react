import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testData = {
    id: 1,
    image: '',
    name: 'My favorite episode',
    season: 1,
    number: 4,
    summary: 'We need season 5 already, sheesh!',
    runtime: '50 minutes' 
}
const imageData = {
    id: 1,
    image: null,
    name: 'My favorite episode',
    season: 1,
    number: 4,
    summary: 'We need season 5 already, sheesh!',
    runtime: '50 minutes' 
}

test("renders without error", () => { 
    render(<Episode episode={['Stranger Example']}/>);
 });

test("renders the summary test passed as prop", () => { 
    render(<Episode episode={testData}/>);

    const summary = screen.queryByText(/need/i);
    expect(summary).toBeVisible();
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('season');
});

test("renders default image when image is not defined", () => { 
    render(<Episode episode={imageData}/>);

    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image).toBeInTheDocument();
});
