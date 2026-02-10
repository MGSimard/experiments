import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TooltipProvider } from "@/_components/shadcn-ui/tooltip";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/_components/shadcn-ui/sidebar";
import { AppSidebar } from "@/_components/AppSidebar";
import { configMeta, openGraph, twitter, misc, configLinks, favIcons, fontPreloads, styles } from "@/_lib/head";

export const Route = createRootRoute({
  head: () => ({
    meta: [...configMeta, ...openGraph, ...twitter, ...misc],
    links: [...configLinks, ...favIcons, ...fontPreloads, ...styles],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="root">
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset className="relative">
                <SidebarTrigger className="absolute top-0 left-0 z-10" />
                {children}
              </SidebarInset>
            </SidebarProvider>
          </TooltipProvider>
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
