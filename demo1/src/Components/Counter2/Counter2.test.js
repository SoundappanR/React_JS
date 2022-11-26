import { Counter2 } from "./Counter2";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter2", () => {
  test("Renders Properly", () => {
    render(<Counter2 count={0} />);
    const counter2Element = screen.getByRole("heading");
    expect(counter2Element).toBeInTheDocument();
  });
  //   test("Zero check", () => {
  //     render(<Counter2 count={0} />);
  //     const paraElement = screen.getByRole("paragraph");
  //     expect(paraElement).toHavetextContent("0");
  //   });

  test("Button Check", () => {
    const increment = jest.fn();
    const decrement = jest.fn();
    render(
      <Counter2 count={0} handlecount={increment} handleDec={decrement} />
    );

    const childPlus = screen.getByRole("button", { name: "ChildPlus" });
    expect(childPlus).toBeInTheDocument();
    user.click(childPlus);
    expect(increment).toHaveBeenCalledTimes(1);
  });
});
