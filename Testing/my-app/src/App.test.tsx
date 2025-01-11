import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders hello world text", () => {
  render(<App />);
  const word = screen.getByText(/hello world/i);
  expect(word).toBeInTheDocument();
});
