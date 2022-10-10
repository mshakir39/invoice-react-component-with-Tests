import * as React from "react";
import "jest-canvas-mock";
import { render } from "@testing-library/react";

import Index from "../pages/index";

jest.mock("next/dist/client/router", () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: "/",
    asPath: "/",
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }),
}));

describe("Index", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
