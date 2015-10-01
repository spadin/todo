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
