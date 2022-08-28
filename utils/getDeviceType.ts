import UAParser from "ua-parser-js";

// must receive ctx from Next.js ssr
export default async function getDeviceType(ctx) {
  let userAgent;

  if (ctx.req) {
    userAgent = ctx.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }

  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";

  return { deviceType };
}
