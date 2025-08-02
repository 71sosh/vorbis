import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { supabase } from './lib/supabaseClient';

// Ensure we're in browser environment
if (typeof window !== 'undefined') {
  // Add redirect logic for Vercel
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, '', redirect);
  }

  // Supabase auth handling
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      localStorage.removeItem('supabaseSession');
    } else if (session) {
      localStorage.setItem('supabaseSession', JSON.stringify(session));
    }
  });

  // Initialize session
  const initSession = async () => {
    const sessionString = localStorage.getItem('supabaseSession');
    if (sessionString) {
      try {
        const session = JSON.parse(sessionString);
        await supabase.auth.setSession(session);
      } catch (error) {
        console.error('Session restore error:', error);
        localStorage.removeItem('supabaseSession');
      }
    }
    
    // Create root after session initialization
    const rootElement = document.getElementById('root');
    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    } else {
      console.error('Root element not found');
    }
  };

  initSession();
}
