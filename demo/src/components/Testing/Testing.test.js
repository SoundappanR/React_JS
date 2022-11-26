import { render, screen } from "@testing-library/react";

import { Testing } from "./Testing";

test("Testing", () => {
  render(<Testing />);

  const element = screen.getByText("Wolf");
  expect(element).toBeInTheDocument();
});

test("", () => {
  render(<Testing />);

  const element = screen.getByText(/WOlf/i);
  expect(element).toBeInTheDocument();
});
