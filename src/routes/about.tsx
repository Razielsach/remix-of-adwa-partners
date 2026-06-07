import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Adwa Partners" },
      {
        name: "description",
        content:
          "Meet the Adwa Partners team — strategic advisors helping organizations navigate complexity with practical insight and measurable results.",
      },
      { property: "og:title", content: "About — Adwa Partners" },
      {
        property: "og:description",
        content:
          "Meet the Adwa Partners team — strategic advisors helping organizations navigate complexity with practical insight and measurable results.",
      },
    ],
  }),
  component: AboutPage,
});
