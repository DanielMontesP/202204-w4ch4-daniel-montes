import { render, screen } from "@testing-library/react";

describe("Given a Display Component", () => {
  describe("When Display is renderized", () => {
    test("Then it sould always find string: className='number'", () => {
      const expectedText = "5555";
      const Display = () => {
        return <span className="number">{expectedText}</span>;
      };
      render(<Display />);

      const linkElement = screen.getByText(expectedText);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
