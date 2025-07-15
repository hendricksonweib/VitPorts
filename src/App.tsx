import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/features/theme-provider"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

export default function App() {
  return (
   <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
              <p className="mt-4 text-gray-600">This is a simple sidebar layout with a header and a search form.</p>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  </ThemeProvider>  
  )
}
