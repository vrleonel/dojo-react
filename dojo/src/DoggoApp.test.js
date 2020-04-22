import React from "react";
import {
  render,
  fireEvent, 
  waitForElement
} from '@testing-library/react';
import DoggoApp from "./DoggoApp";

function setup() {
  return render(<DoggoApp />);
}

const mockBreeds = {
  message: [ "akita", "pug" ],
  status: "success"
}

describe('Doggo app', () => {
  it('Load Breeds', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockBreeds));
    const {getByText, debug} = setup();
    const selectOption = getByText('Selecione uma raça');
    expect(selectOption).toBeInTheDocument();
    expect(
      await waitForElement(() => getByText("akita"))
    ).toBeInTheDocument();
    expect(
      await waitForElement(() => getByText("pug"))
    ).toBeInTheDocument();
    
  });
});

