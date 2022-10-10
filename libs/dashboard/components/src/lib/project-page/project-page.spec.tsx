import { render } from "@testing-library/react";

import ProjectPage from "./project-page";

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

describe("Projects Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProjectPage />);
    expect(baseElement).toBeTruthy();
  });
});
