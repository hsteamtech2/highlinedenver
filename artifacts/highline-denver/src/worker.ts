export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    const gone410 = [
      "/blogs/",
      "/highline-management-featured-in-redfin-news/",
      "/author/alignedgrowthdigital/",
      "/author/lauren/",
    ];

    if (gone410.some((path) => url.pathname === path || url.pathname === path.replace(/\/$/, ""))) {
      return new Response("Gone", { status: 410 });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<{ ASSETS: Fetcher }>;
