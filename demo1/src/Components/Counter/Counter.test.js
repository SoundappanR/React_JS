import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter component", () => {
  test("render correctly", () => {
    render(<Counter />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();

    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).toHaveLength(3);
  });

  test("testing zero", () => {
    render(<Counter />);
    const zeroElement = screen.getByRole("heading");
    expect(zeroElement).toHaveTextContent(0);
  });

  test("1 after clicking", () => {
    render(<Counter />);
    const buttonElement = screen.getByText("increase");
    user.click(buttonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("Render 100", () => {
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    user.type(inputElement, "100");
    expect(inputElement).toHaveValue(100);

    const setElement = screen.getByText("Set");
    user.click(setElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("100");
  });
});
