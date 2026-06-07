import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adwa Partners" },
      { name: "description", content: "Talk to Adwa Partners about advisory, leadership, and institutional transformation. Response within 24 hours." },
      { property: "og:title", content: "Contact — Adwa Partners" },
      { property: "og:description", content: "Talk to Adwa Partners about advisory, leadership, and institutional transformation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
