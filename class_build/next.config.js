module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "jjeje",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { pages: "/404" },
  }),
};
