/* Emerald Majlis layout: one calm hospitality shell with direct paths to the homepage and service sections. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
const FileStorage = lazy(() => import("@/pages/FileStorage"));
const AdminRequests = lazy(() => import("@/pages/AdminRequests"));
const AdminMagicLogin = lazy(() => import("@/pages/AdminMagicLogin"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F4EA]" aria-label="Memuat halaman" />}>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/juragankambing" component={Home} />
      <Route path="/juragankambing/" component={Home} />
      <Route path="/storage" component={FileStorage} />
      <Route path="/admin/requests" component={AdminRequests} />
      <Route path="/admin/magic-login" component={AdminMagicLogin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
