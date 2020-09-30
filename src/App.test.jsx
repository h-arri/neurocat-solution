import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('<App />', () => {
    const { getByText } = render(<App/>);
    expect(getByText('No data!')).toBeInTheDocument();
    const button = getByText('+');
    fireEvent.click(button);

    // more tests
});


