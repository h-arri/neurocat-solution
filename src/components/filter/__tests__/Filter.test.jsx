import React from "react";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Filter from "../Filter";

test(("<Filter />"), () => {
    const sampleProps = {
        searchText: 'Hallo',
        handleSearch: jest.fn(),
        handleClick: jest.fn()
    };

    const {
        getByPlaceholderText,
        getByText
    } = render(<Filter {...sampleProps} />);

    const input = getByPlaceholderText('Search');
    const button = getByText('+');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toHaveAttribute('value', 'HALLO');
    fireEvent.change(input, { target: { value: 'Bye!' } });
    expect(sampleProps.handleSearch).toHaveBeenCalledWith('bye!');
    fireEvent.click(button);
    expect(sampleProps.handleClick).toHaveBeenCalledTimes(1);

});