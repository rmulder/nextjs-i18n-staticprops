module.exports = {
  experimental: {
    redirects() {
      return [
        {
          source: "/:lang((?!de|en))/:path*",
          destination: "/de/:path*",
          permanent: true
        },
        {
          source: "/someSubdir/test",
          destination: "/de/someSubdir/test",
          permanent: true
        }
      ];
    },
    rewrites() {
      return [
        {
          source: "/testpath/:lang",
          destination: "/testpage"
        }
      ];
    }
  }
};
