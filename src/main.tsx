import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { supabase } from './lib/supabaseClient';

// Add Supabase auth state listener
supabase.auth.onAuthStateChange((event, session) => {
  console.log(`Supabase auth event: ${event}`);
  if (event === 'SIGNED_OUT') {
    // Clear local storage or handle sign-out
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
