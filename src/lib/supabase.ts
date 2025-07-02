import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://igelinlsjnqcplmvsiqd.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnZWxpbmxzam5xY3BsbXZzaXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NTA1NzcsImV4cCI6MjA2NzAyNjU3N30.1zshIs8oawK7VSYAZiQcY0Zn0vUOUfdgieMT280Iylg';

export const supabase = createClient(supabaseUrl, supabaseKey);