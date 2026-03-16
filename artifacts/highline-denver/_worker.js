const gone410 = [
  "/blogs",
  "/blogs/",
  "/highline-management-featured-in-redfin-news",
  "/highline-management-featured-in-redfin-news/",
  "/author/alignedgrowthdigital",
  "/author/alignedgrowthdigital/",
  "/author/lauren",
  "/author/lauren/",
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (gone410.includes(url.pathname)) {
      return new Response("Gone", { status: 410 });
    }
    return env.ASSETS.fetch(request);
  },
};
