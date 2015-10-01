import Request from "../../src/request";
import Resource from "../../src/resource";
import Store from '../../src/todo/store';

describe("Store", () => {
  var resourceStub;

  describe("#findAll", () => {
    it("calls Request.get with resourceUrl", () => {
      spyOn(Request, "make");

      resourceStub = sinon.stub(Resource.prototype, "index").returns("/api/endpoint");

      new Store({resourceUrl: "/api/endpoint"}).findAll();

      expect(Request.make).toHaveBeenCalledWith("/api/endpoint");

      resourceStub.restore();
    });

    it("returns response from Request.get", () => {
      spyOn(Request, "make").and.returnValue("return-value")

      var stub = sinon.stub(Resource.prototype, "index").returns({});

      var store = new Store({resourceUrl: "/api/endpoint"})
      expect(store.findAll()).toEqual("return-value");

      stub.restore();
    });
  });
});
