/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    // Define the URL of your Express.js backend
    const backendUrl = "http://localhost:8000" + req.url;

    // Forward the request to the backend
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" ? req.body : undefined,
    });

    // Forward the response back to the client
    res.status(response.status);
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });
    response.body.pipe(res);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Proxy error" });
  }
};
