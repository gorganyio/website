export default {
    async fetch(request, env, ctx) {
      const upstream = "https://gorgany.framer.website";
      const url = new URL(request.url);
      url.host = new URL(upstream).host;
      url.protocol = "https:";
  
      const newRequest = new Request(url.toString(), request);
      return fetch(newRequest);
    }
  };