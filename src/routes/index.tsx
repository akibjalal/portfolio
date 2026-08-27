import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Akib Jalal | Aspiring Software Engineer & Developer";
const DESCRIPTION =
  "Portfolio of Akib Jalal, an ICT (BICE) student at Bangladesh University of Professionals interested in software engineering, full-stack web development and cybersecurity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/**
 * The portfolio itself is a completely static site living in `public/site/`
 * (index.html + style.css + script.js + assets). That folder is what gets
 * uploaded to GitHub Pages. Here we simply render it so the preview shows
 * the real thing — there is only one copy of the site to maintain.
 */
function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Akib Jalal — portfolio"
      style={{ border: 0, width: "100%", height: "100vh", display: "block" }}
    />
  );
}
