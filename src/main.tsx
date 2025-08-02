import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { supabase } from './lib/supabaseClient';

// Add strict path check for Vercel
const path = window.location.pathname;
if (!path.startsWith('/static')) { // Added missing parenthesis here
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, '', redirect);
  }
}

// Supabase auth handling
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    localStorage.clear();
  } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
    if (session) {
      localStorage.setItem('supabaseSession', JSON.stringify(session));
    }
  }
});

// Restore session
const initSession = async () => {
  const sessionString = localStorage.getItem('supabaseSession');
  if (sessionString) {
    try {
      const session = JSON.parse(sessionString);
      await supabase.auth.setSession(session);
    } catch (error) {
      localStorage.removeItem('supabaseSession');
    }
  }
};

initSession();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
