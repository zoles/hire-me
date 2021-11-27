import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

test("renders header text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Checkin and checkout management/i);
  expect(linkElement).toBeInTheDocument();
});
