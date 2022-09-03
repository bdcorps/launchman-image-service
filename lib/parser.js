import { parse } from "url";

export function parseRequest(req) {
  console.log("HTTP " + req.url);

  const { pathname, query } = parse(req.url || "/", true);
  const { title, logo, url } = query || {};

  const parsedRequest = {
    fileType: ".png",
    title: decodeURIComponent(title),
    logo,
    url,
  };

  return parsedRequest;
}
