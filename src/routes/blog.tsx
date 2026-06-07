import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site/BlogPage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Adwa Partners Insights" },
      {
        name: "description",
        content:
          "Latest insights on strategy, leadership, digital transformation and operations from the Adwa Partners team.",
      },
      { property: "og:title", content: "Blog — Adwa Partners Insights" },
      {
        property: "og:description",
        content:
          "Latest insights on strategy, leadership, digital transformation and operations from the Adwa Partners team.",
      },
    ],
  }),
  component: BlogPage,
});
