# Supabase Setup Guide

## Step-by-Step Instructions for Setting Up Your Supabase Backend

### 1. Create a Supabase Account
1. Visit [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub, Google, or email

### 2. Create a New Project
1. Click "New Project"
2. Choose your organization (or create one)
3. Fill in:
   - **Project Name**: flowvahub (or any name you prefer)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your location
4. Click "Create new project"
5. Wait 2-3 minutes for provisioning

### 3. Get Your API Credentials
1. In your project dashboard, click on the ⚙️ (Settings) icon in the sidebar
2. Go to **Project Settings** → **API**
3. You'll see:
   - **Project URL** (starts with https://xxx.supabase.co)
   - **anon/public key** (long string starting with eyJ...)
4. Copy these values - you'll need them for your `.env` file

### 4. Set Up the Database Schema
1. In the Supabase dashboard sidebar, click on 🗄️ **SQL Editor**
2. Click **New query**
3. Open the `supabase-schema.sql` file from this project
4. Copy ALL the contents
5. Paste into the SQL Editor
6. Click **Run** (or press Ctrl+Enter)
7. You should see "Success. No rows returned"

This creates:
- ✅ 3 tables (tools, user_tools, user_rewards)
- ✅ Security policies (Row Level Security)
- ✅ 20 sample tools in the library

### 5. Configure Authentication Settings (Optional but Recommended)
1. Go to **Authentication** → **Providers** in the sidebar
2. Make sure **Email** is enabled
3. Click on **Email** to configure:
   - **Disable** "Confirm email" for easier testing
   - (Or keep it enabled and check your email for confirmation links)
4. Save changes

### 6. Verify the Setup
1. Go to **Table Editor** in the sidebar
2. You should see three tables:
   - `tools` (with 20 sample tools)
   - `user_tools` (empty for now)
   - `user_rewards` (empty for now)
3. Click on the `tools` table to see the sample data

### 7. Update Your .env File
1. In your project root, create a `.env` file (copy from `.env.example`)
2. Add your credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 8. Test the Connection
1. Run `npm run dev` in your terminal
2. Open the app in your browser
3. Try signing up with a test email
4. If successful, you'll be redirected to the dashboard!

## Common Issues and Solutions

### Issue: "Missing Supabase environment variables"
**Solution**: Make sure you created the `.env` file with the correct variable names (`VITE_` prefix is required for Vite)

### Issue: "relation 'tools' does not exist"
**Solution**: You didn't run the SQL schema. Go back to Step 4 and run the entire schema script.

### Issue: Can't see sample tools in the library
**Solution**: Check the SQL Editor for errors. Make sure the entire schema script ran successfully, especially the INSERT statements at the bottom.

### Issue: "Invalid login credentials"
**Solution**: 
- If email confirmation is enabled, check your email inbox
- Try disabling email confirmation in Auth settings (Step 5)
- Make sure you're using the email you signed up with

### Issue: "User already registered" but can't log in
**Solution**: Check your Supabase Auth users. Go to Authentication → Users to see all registered users.

## Database Structure Overview

### `tools` table
Stores all available tools in the library
- id (UUID, primary key)
- name (text)
- category (text)
- description (text)
- website_url, logo_url (optional)

### `user_tools` table
Links users to their selected tools
- user_id (references auth.users)
- tool_id (references tools)
- monthly_cost (decimal)
- Each user can only add each tool once

### `user_rewards` table
Tracks points earned by each user
- user_id (unique per user)
- points (current points)
- total_earned (lifetime points)

## Security Features

✅ **Row Level Security (RLS)** enabled on all tables
✅ Users can only see their own data
✅ Public can read the tools library
✅ Authentication tokens handled securely by Supabase

## Next Steps

Once everything is set up:
1. Create a test account
2. Add some tools from your dashboard
3. Browse the library and add tools
4. Watch your reward points grow!

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
- Check the main README.md for more troubleshooting tips
