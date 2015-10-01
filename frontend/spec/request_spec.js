import $ from "jquery";
import _ from "lodash";
import Request from '../src/request';

describe("Request", () => {
  beforeEach(() => {
    spyOn($, "ajax").and.returnValue({
      success(cb) { cb(); },
      fail(cb)    { cb(); }
    });
  });

  _.each([
    [".delete", "DELETE", (endpoint) => { return Request.delete(endpoint) }],
    [".get",    "GET",    (endpoint) => { return Request.get(endpoint)    }],
    [".patch",  "PATCH",  (endpoint) => { return Request.patch(endpoint)  }],
    [".post",   "POST",   (endpoint) => { return Request.post(endpoint)   }],
    [".put",    "PUT",    (endpoint) => { return Request.put(endpoint)    }],
  ], ([desc, method, request]) => {
    describe(desc, () => {
      sharedRequestExamples({
        request: request,
        method: method,
        endpoint: "/api/endpoint"
      });
    });
  });

  describe(".make", () => {
    _.each([
      ["deleter request", "DELETE", (method, endpoint, data) => { return Request.make({method: method, endpoint: endpoint, data: data}) }],
      ["get request",     "GET",    (method, endpoint, data) => { return Request.make({method: method, endpoint: endpoint, data: data}) }],
      ["patch request",   "PATCH",  (method, endpoint, data) => { return Request.make({method: method, endpoint: endpoint, data: data}) }],
      ["post request",    "POST",   (method, endpoint, data) => { return Request.make({method: method, endpoint: endpoint, data: data}) }],
      ["put request",     "PUT",    (method, endpoint, data) => { return Request.make({method: method, endpoint: endpoint, data: data}) }],
    ], ([desc, method, request]) => {
      describe(desc, () => {
        sharedMakeRequestExamples({
          request: request,
          method: method,
          endpoint: "/api/endpoint",
          data: {}
        });
      });
    });
  });

  function sharedMakeRequestExamples(context) {
    var {request, method, endpoint, data} = context;

    it("returns a promise object", () => {
      expect(request(method, endpoint, data)).toEqual(jasmine.any(Promise));
    });

    it(`makes an ajax request to ${method} /api/endpoint`, (done) => {
      request(method, endpoint, data).then(() => {
        expect($.ajax).toHaveBeenCalledWith({
          method: method,
          url: endpoint,
          data: data
        });
        done();
      })
    });

    it("resolves the promise with ajax data when successful", (done) => {
      $.ajax.and.returnValue({
        success(cb) {
          cb("test-data");
        }
      });

      request(method, endpoint, data).then((data) => {
        expect(data).toEqual("test-data");
        done();
      })
    });

    it("rejects the promise on ajax error", (done) => {
      $.ajax.and.returnValue({
        success() {
          return this;
        },
        fail(cb) {
          cb("error-message");
        }
      });

      request(method, endpoint, data).catch((data) => {
        expect(data).toEqual("error-message");
        done();
      });
    });
  }

  function sharedRequestExamples(context) {
    var {request, method, endpoint} = context;

    it("returns a promise object", () => {
      expect(request(endpoint)).toEqual(jasmine.any(Promise));
    });

    it(`makes an ajax request to ${method} /api/endpoint`, (done) => {
      request(endpoint).then(() => {
        expect($.ajax).toHaveBeenCalledWith({
          method: method,
          url: endpoint
        });
        done();
      })
    });

    it("resolves the promise with ajax data when successful", (done) => {
      $.ajax.and.returnValue({
        success(cb) {
          cb("test-data");
        }
      });

      request(endpoint).then((data) => {
        expect(data).toEqual("test-data");
        done();
      })
    });

    it("rejects the promise on ajax error", (done) => {
      $.ajax.and.returnValue({
        success() {
          return this;
        },
        fail(cb) {
          cb("error-message");
        }
      });

      request(endpoint).catch((data) => {
        expect(data).toEqual("error-message");
        done();
      });
    });
  }
});
