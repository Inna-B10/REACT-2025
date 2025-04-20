import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

afterEach(cleanup);

describe("App routing", () => {
  it("renders the layout when visiting /", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    const banner = screen.getByRole("banner");
    expect(banner).toBeDefined();
  });

  it("renders Landing Page when visiting /", () => {
    // Arrange
    const headingTitle = "Examples";
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    const title = screen.getByText(headingTitle);

    expect(title).toBeDefined();
  });

  it("renders About Page when visiting /about", () => {
    // Arrange
    const headingTitle = "About";

    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    const title = screen.getByText(headingTitle);

    expect(title).toBeDefined();
  });

  it("renders NotFound Page when visiting an unknown route", () => {
    // Arrange
    const headingTitle = /404/;

    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    const title = screen.getByText(headingTitle);

    expect(title).toBeDefined();
  });
});
