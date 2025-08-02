import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { supabase } from './lib/supabaseClient';

// Add Supabase auth state listener
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    localStorage.clear();
  } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
    if (session) {
      localStorage.setItem('supabaseSession', JSON.stringify(session));
    }
  }
});

// Check for existing session on load
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
