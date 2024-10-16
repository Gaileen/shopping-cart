// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import Heading from "../components/Heading";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    const headElm = screen.getByRole("heading", { name: /Small Shop/i })
    expect(headElm).toBeInTheDocument();
    // screen.debug();
  });
});
