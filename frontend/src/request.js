import $ from "jquery";

class Request {
  constructor(method, endpoint) {
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
    return new Request("DELETE", endpoint).execute();
  }

  static get(endpoint) {
    return new Request("GET", endpoint).execute();
  }

  static patch(endpoint) {
    return new Request("PATCH", endpoint).execute();
  }

  static post(endpoint) {
    return new Request("POST", endpoint).execute();
  }

  static put(endpoint) {
    return new Request("PUT", endpoint).execute();
  }
}

export default Request;
