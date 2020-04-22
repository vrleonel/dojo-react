import React from "react";

import { render, fireEvent } from "@testing-library/react";
import ColorChange from "./ColorChange";

function setup() {
  return render(<ColorChange />);
}

describe("ColorChange", () => {
  it("Initial Value 0", () => {
    const { getByText } = setup();
    expect(getByText(/Valor atual 0/g)).toBeInTheDocument();
  });

  it("Change value to +5 when click +5 button", () => {
    const { getByText, debug } = setup();
    const btn = getByText("+5");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);

    expect(getByText(/Valor atual 5/g)).toBeInTheDocument();
  });

  it("Change value to -5 when click -5 button", () => {
    const { getByText, debug } = setup();
    const btn = getByText("-5");
    
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(getByText(/Valor atual -5/g)).toBeInTheDocument();
  });

  it('Click +5 until 255', () => {
    const { getByText, container } = setup();
    const btn = getByText("+5");
    for (let index = 0; index < 60; index++) {
      fireEvent.click(btn);
    }
    const textValue = getByText('Valor atual 300');
    expect(textValue).toBeInTheDocument();
    expect(document.body.style.background).toEqual('rgb(0, 0, 0)');
    expect(document.body.style.color).toEqual('rgb(255, 255, 255)');
  })
});

