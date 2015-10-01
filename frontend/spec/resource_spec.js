import Resource from "../src/resource";

describe("Resource", () => {
  var resource;

  beforeEach(() => {
    resource = new Resource("/api/endpoint");
  });

  describe("#index", () => {
    it("returns the GET url as the index", () => {
      expect(resource.index()).toEqual({method: "GET", endpoint: "/api/endpoint"});
    });
  });

  describe("#create", () => {
    it("returns the POST url as the create endpoint", () => {
      expect(resource.create()).toEqual({method: "POST", endpoint: "/api/endpoint"});
    });
  });

  describe("#update", () => {
    it("returns the PUT url and the update endpoint", () => {
      expect(resource.update("some-id")).toEqual({method: "PUT", endpoint: "/api/endpoint/some-id"});
    });
  });

  describe("#destroy", () => {
    it("returns the DELETE url and the destroy endpoint", () => {
      expect(resource.destroy("some-id")).toEqual({method: "DELETE", endpoint: "/api/endpoint/some-id"});
    });
  });
});
