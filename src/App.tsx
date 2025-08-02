import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "@/lib/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import LoadingSpinner from '@/components/loading-spinner';
import '@/index.css';

// Optimized lazy loading with prefetch
const lazyWithPrefetch = (factory: () => Promise<{ default: React.ComponentType<any> }>) => {
  const Component = lazy(factory);
  const prefetch = () => factory().then(module => module);
  return Object.assign(Component, { prefetch });
};

const HomePage = lazyWithPrefetch(() => import('@/pages/home-page'));
const AuthPage = lazyWithPrefetch(() => import('@/pages/auth-page'));
const DashboardBuilder = lazyWithPrefetch(() => import('@/pages/dashboard-builder'));
const UsersAccount = lazyWithPrefetch(() => import('@/pages/users-account'));
const NotFound = lazyWithPrefetch(() => import('@/pages/not-found'));

// Prefetch routes on hover
const PrefetchLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const handleMouseEnter = () => {
    switch (to) {
      case '/': HomePage.prefetch(); break;
      case '/login': AuthPage.prefetch(); break;
      case '/builder': DashboardBuilder.prefetch(); break;
      case '/account': UsersAccount.prefetch(); break;
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      {children}
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster position="top-center" richColors />
          <Router>
            <ScrollToTop />
            <Suspense fallback={<LoadingSpinner fullScreen={true} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/builder" element={<DashboardBuilder />} />
                <Route path="/account" element={<UsersAccount />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
