import { render, screen } from "@testing-library/react";
import Display from "./Display";
import PhoneContext from "../../contexts/PhoneContext";
import React from "react-dom";
import reactDom from "react-dom";

describe("Given a Display Component", () => {
  describe("When Display is renderized", () => {
    test("Then it sould always find className='number'", () => {
      const expectedText = "555";
      render(
        <PhoneContext.Provider value={""}>
          <Display />
          555
        </PhoneContext.Provider>
      );
      const linkElement = screen.getByText(expectedText);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
