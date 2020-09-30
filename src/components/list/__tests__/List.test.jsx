import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import List from "../List";

test(("<List />"), () => {
    const sampleProps = {
        items: ['Hallo', 'Bye', 'Good morning']
    };

    const { getByText } = render(<List {...sampleProps} />);
    expect(getByText('HALLO')).toBeInTheDocument();
    expect(getByText('BYE')).toBeInTheDocument();
    expect(getByText('GOOD MORNING')).toBeInTheDocument();
});
