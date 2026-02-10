import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/_components/PageType-MD";

export const Route = createFileRoute("/notes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeMD>Hello "/notes"!</PageTypeMD>;
}
