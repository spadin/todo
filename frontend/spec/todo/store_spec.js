import Request from "../../src/request";
import Store from '../../src/todo/store';

describe("Store", () => {
  describe("#findAll", () => {
    it("calls Request.get with resourceUrl", () => {
      spyOn(Request, "get");

      new Store({resourceUrl: "/api/endpoint"}).findAll();

      expect(Request.get).toHaveBeenCalledWith("/api/endpoint");
    });

    it("returns response from Request.get", () => {
      spyOn(Request, "get").and.returnValue("return-value")

      var store = new Store({resourceUrl: "/api/endpoint"})

      expect(store.findAll()).toEqual("return-value");
    });
  });
});
