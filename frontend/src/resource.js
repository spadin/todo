class Resource {
  constructor(url) {
    this.url = url;
  }

  create() {
    return {
      method: "POST",
      path: this.url
    };
  }

  index() {
    return {
      method: "GET",
      path: this.url
    };
  }

  update(id) {
    return {
      method: "PUT",
      path: `${this.url}/${id}`
    };
  }

  destroy(id) {
    return {
      method: "DELETE",
      path: `${this.url}/${id}`
    };
  }
}

export default Resource;
