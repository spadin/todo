import Request from "../request";
import Resource from "../resource";

class Store {
  constructor({resourceUrl} = {}) {
    this.resource = new Resource(resourceUrl);
  }
  findAll() {
    return this.request(this.index());
  }

  request(resource) {
    return new Request(resource).execute();
  }

  index() {
    return this.resource.index();
  }
}

export default Store;
