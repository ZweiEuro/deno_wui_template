import { render } from "@testing-library/react";

import { describe, it, expect } from "npm:vitest";
import Application from "../src/App.tsx";


describe("Test the main application", () => {
  it("Can cleanly render the application", () => {

    const screen = render(<Application />);
    expect(screen.queryByTestId("app")).toBeDefined()

  });
}); 