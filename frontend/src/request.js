import $ from "jquery";

class Request {
  constructor({method, endpoint}) {
    this.method = method;
    this.endpoint = endpoint;
  }

  execute() {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: this.method,
        url: this.endpoint
      }).success(resolve).fail(reject);
    });
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
