import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { supabase } from './lib/supabaseClient';

// Simplified redirect logic
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect);
}

// Improved auth state handling
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    localStorage.removeItem('supabaseSession');
  } else if (session) {
    localStorage.setItem('supabaseSession', JSON.stringify(session));
  }
});

// Initialize auth session
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

initSession().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
