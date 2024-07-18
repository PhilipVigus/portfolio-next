import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import "../styles/globals.css";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
