import { getHtml } from "../../lib/html";
import { parseRequest } from "../../lib/parser";
import { getScreenshot } from "../../lib/puppeteer";

export default async function handle(req, res) {
  try {
    const parsedReq = parseRequest(req);
    console.log({ parsedReq })
    const html = getHtml(parsedReq);
    const file = await getScreenshot(html, parseRequest.title || "image");

    res.statusCode = 200;
    res.setHeader("Content-Type", `image/png`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );

    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");

    console.error(e);
  }
}
