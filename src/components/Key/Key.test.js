import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key Component", () => {
  describe("When Key is renderized", () => {
    test("Then it sould always find string: key", () => {
      const expectedText = "key";

      render(<Key text="key" />);
      //render(<span>Calling</span>);
      const linkElement = screen.getByText(expectedText);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
