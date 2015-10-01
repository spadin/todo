class Resource {
  constructor(url) {
    this.url = url;
  }

  create() {
    return {
      method: "POST",
      endpoint: this.url
    };
  }

  index() {
    return {
      method: "GET",
      endpoint: this.url
    };
  }

  update(id) {
    return {
      method: "PUT",
      endpoint: `${this.url}/${id}`
    };
  }

  destroy(id) {
    return {
      method: "DELETE",
      endpoint: `${this.url}/${id}`
    };
  }
}

export default Resource;
