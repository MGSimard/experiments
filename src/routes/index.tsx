import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: PageHome });

function PageHome() {
  return <div>Home</div>;
}
