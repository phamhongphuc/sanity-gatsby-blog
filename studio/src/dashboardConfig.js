export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611b2815397f12840cae0baa",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-x5n4ymgx",
                  apiId: "d5450868-3d2d-49d3-8f80-2dd5e61e927f",
                },
                {
                  buildHookId: "611b2815d6e8e59c69011453",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-28ja196n",
                  apiId: "7d1c475d-1d79-41ff-8f5f-ee123e20c554",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/phamhongphuc/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-28ja196n.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
