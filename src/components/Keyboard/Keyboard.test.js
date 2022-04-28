import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import KeyBoard from "../KeyBoard/KeyBoard";

describe("Given a KeyBoard Component", () => {
  describe("When KeyBoard is renderized", () => {
    test("Then it sould always find text: 1", () => {
      const expectedText = "1";
      render(
        <PhoneContext.Provider value={""}>
          <KeyBoard />
        </PhoneContext.Provider>
      );
      const linkElement = screen.getByText(expectedText);
      expect(linkElement).toBeInTheDocument("");
      // expect(linkElement).toBeInTheDocument();
    });
  });
});
