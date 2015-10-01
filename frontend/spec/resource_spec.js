import Resource from "../src/resource";

describe("Resource", () => {
  var resource;

  beforeEach(() => {
    resource = new Resource("/api/endpoint");
  });

  describe("#index", () => {
    it("returns the GET url as the index", () => {
      expect(resource.index()).toEqual({method: "GET", path: "/api/endpoint"});
    });
  });

  describe("#create", () => {
    it("returns the POST url as the create path", () => {
      expect(resource.create()).toEqual({method: "POST", path: "/api/endpoint"});
    });
  });

  describe("#update", () => {
    it("returns the PUT url and the update path", () => {
      expect(resource.update("some-id")).toEqual({method: "PUT", path: "/api/endpoint/some-id"});
    });
  });

  describe("#destroy", () => {
    it("returns the DELETE url and the destroy path", () => {
      expect(resource.destroy("some-id")).toEqual({method: "DELETE", path: "/api/endpoint/some-id"});
    });
  });
});
