import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Adwa Partners" },
      {
        name: "description",
        content:
          "Health Strategy & CPD, Adwa Leadership Institute (ALI), Institutional Strengthening, Strategy & Advisory, and Talent & Global Pathways — practical services from Adwa Partners.",
      },
      { property: "og:title", content: "Services — Adwa Partners" },
      {
        property: "og:description",
        content:
          "Integrated services spanning healthcare CPD, leadership development, institutional strengthening, advisory, and global talent pathways.",
      },
    ],
  }),
  component: ServicesPage,
});
