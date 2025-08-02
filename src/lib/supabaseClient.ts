import { createClient } from '@supabase/supabase-js';

// Add your Supabase URL and API key here
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.VITE_SUPABASE_KEY || 'YOUR_SUPABASE_KEY';

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing!');
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase Key:', supabaseKey ? '***' + supabaseKey.slice(-4) : 'undefined');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Debugging
console.log('Supabase client initialized:', !!supabase);
