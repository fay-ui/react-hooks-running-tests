// src/__tests__/Article.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Article from "../components/Article"; // Adjust the path as needed

// Your test case
test("displays the text 'please pass this test'", () => {
  render(<Article />);
  screen.debug(); // This will log the current state of the DOM
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
