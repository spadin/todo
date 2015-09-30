import Store from '../../src/todo/store';

describe("Store", () => {
  describe("#findAll", () => {
    it("returns a Promise object", () => {
      var itemsStore = new Store({resourceUrl: "/api/todo_items"});
      expect(itemsStore.findAll()).toEqual(jasmine.any(Promise));
    });
  });
});
