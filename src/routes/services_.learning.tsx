import { createFileRoute } from "@tanstack/react-router";
import { LearningPage } from "@/components/site/LearningPage";

export const Route = createFileRoute("/services_/learning")({
  head: () => ({
    meta: [
      { title: "Learning & Trainings — Adwa Partners" },
      {
        name: "description",
        content:
          "Health Strategy & CPD and the Adwa Leadership Institute (ALI) — accredited learning, leadership development, and workforce readiness programs.",
      },
      { property: "og:title", content: "Learning & Trainings — Adwa Partners" },
      {
        property: "og:description",
        content:
          "Accredited CPD, leadership development, and workforce readiness programs from Adwa Partners.",
      },
    ],
  }),
  component: LearningPage,
});
