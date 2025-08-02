import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { supabase } from './lib/supabaseClient';

// Only run in browser environment
if (typeof window !== 'undefined') {
  // Redirect logic
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, '', redirect);
  }

  // Create root element immediately
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found!');
  } else {
    // Render the app immediately
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  // Auth handling
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      localStorage.removeItem('supabaseSession');
    } else if (session) {
      localStorage.setItem('supabaseSession', JSON.stringify(session));
    }
  });

  // Initialize session in the background
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
  };

  initSession();
} else {
  console.log('Server-side environment detected');
}
