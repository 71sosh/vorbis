// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL:', supabaseUrl);
  console.error('Supabase Key:', supabaseKey?.substring(0, 10) + '...');
  throw new Error(
    'Missing Supabase credentials. Please check your .env file'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
