import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efakwopoqfnpovbvlert.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient('https://glphmdbseubzccvsevcl.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdscGhtZGJzZXViemNjdnNldmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MjY1NzcsImV4cCI6MjAwODUwMjU3N30.kNcIgq2FFpgxm6G-tDBqz3YSFffUxG6QlLrJDhtvMX8')

export default supabase