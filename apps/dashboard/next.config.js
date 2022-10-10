// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

if (!process.env["NEXT_PUBLIC_API"]) {
  throw new Error("Missing NEXT_PUBLIC_API environment variable");
}

if (!process.env["NEXT_PUBLIC_RUN_MODE"]) {
  throw new Error("Missing NEXT_PUBLIC_RUN_MODE environment variable");
}

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // this [] list should grow as we add new environments
  assetPrefix: ["development"].includes(process.env["NEXT_PUBLIC_RUN_MODE"])
    ? "/"
    : undefined,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  publicRuntimeConfig: {
    env: {
      apiHost: process.env["NEXT_PUBLIC_API"],
      runMode: process.env["NEXT_PUBLIC_RUN_MODE"],
    },
  },
};

module.exports = withNx(nextConfig);
