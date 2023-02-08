import { changeCurrentPhaseRoute } from "./routes";

describe("Route", () => {
  it("changeCurrentPhaseRoute", () => {
    const id = "xyz";
    const fullPath = changeCurrentPhaseRoute(id);
    expect(fullPath).toEqual(`api/project/${id}/current-phase`);
  });
});
