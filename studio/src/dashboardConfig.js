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
                    "60d8b2e11fc98c3f9d359504",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sqmmqfqr",
                  apiId: "d3d5b29f-d269-479b-b4e6-97e6fb64e06d",
                },
                {
                  buildHookId: "60d8b2e133e20cb6928e5c4c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-vqejzp7n",
                  apiId: "3e1309ab-ced3-4446-9c1e-d0f2c60a5492",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ThongNart/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-vqejzp7n.netlify.app",
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
