import $ from "jquery";
import _ from "lodash";

class Request {
  constructor(options) {
    this.options = this.generateOptions(options);
  }

  execute() {
    return new Promise((resolve, reject) => {
      $.ajax(this.options).success(resolve).fail(reject);
    });
  }

  generateOptions(options) {
    return _.chain(options).omit("endpoint").assign({url: options.endpoint}).value();
  }

  static make(options) {
    return new Request(options).execute();
  }

  static delete(endpoint) {
    return new Request({method: "DELETE", endpoint: endpoint}).execute();
  }

  static get(endpoint) {
    return new Request({method: "GET", endpoint: endpoint}).execute();
  }

  static patch(endpoint) {
    return new Request({method: "PATCH", endpoint: endpoint}).execute();
  }

  static post(endpoint) {
    return new Request({method: "POST", endpoint: endpoint}).execute();
  }

  static put(endpoint) {
    return new Request({method: "PUT", endpoint: endpoint}).execute();
  }
}

export default Request;
