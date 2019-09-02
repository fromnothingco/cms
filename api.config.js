const config = {
  baseurl: "https://api.test.com",
  endpoints: {
    posts: {
      endpoint: "/posts",
      data: [
        { label: "title", type: "text" },
        { label: "body", component: "TextArea" }
      ]
    },
    pages: {
      endpoint: "/pages",
      data: [
        { label: "title", type: "text" },
        { label: "body", component: "TextArea" }
      ]
    }
  }
};

export default config;
