import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "@/lib/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import LoadingSpinner from '@/components/loading-spinner';
import '@/index.css';

// Lazy load pages
const HomePage = lazy(() => import('@/pages/home-page'));
const AuthPage = lazy(() => import('@/pages/auth-page'));
const DashboardBuilder = lazy(() => import('@/pages/dashboard-builder'));
const UsersAccount = lazy(() => import('@/pages/users-account'));
const NotFound = lazy(() => import('@/pages/not-found'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router>
            <Suspense fallback={<LoadingSpinner />}>
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
