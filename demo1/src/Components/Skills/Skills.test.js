import { render, screen } from "@testing-library/react";

import { Skills } from "./Skills";

describe("Skills component", () => {
  const skillData = ["HTML", "CSS", "Javascript"];

  test("Renders properly", () => {
    render(<Skills skills={skillData} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("count matches", () => {
    render(<Skills skills={skillData} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skillData.length);
  });

  test("Login Button", () => {
    render(<Skills skills={skillData} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Logged Button disabled", () => {
    render(<Skills skills={skillData} />);
    const loginButton = screen.queryByRole("button", { name: "LoggedIn" }); //Used when element is not present in UI
    expect(loginButton).not.toBeInTheDocument();
  });

  test("Logged Button delay", async () => {
    render(<Skills skills={skillData} />);
    const loginButton = await screen.findByRole("button", { name: "LoggedIn" }); //Used when element is delay in UI
    expect(loginButton).toBeInTheDocument();
  });
});
