import { render, screen } from "@testing-library/react";
import Info from "./Info";
import PhoneContext from "../../contexts/PhoneContext";

describe("Given a Info Component", () => {
  describe("When Info is renderized", () => {
    test("Then it sould always find text: Calling...", () => {
      const expectedText = "Calling...";

      render(
        <PhoneContext.Provider value={""}>
          <Info />
        </PhoneContext.Provider>
      );
      const linkElement = screen.getByText(expectedText);
      expect(linkElement).toBeInTheDocument();
      // expect(linkElement).toBeInTheDocument();
    });
  });
});
