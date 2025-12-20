# Flowvahub - Digital Life Manager

A full-stack web application built with React and Supabase that helps users organize their digital tools, discover new ones, and earn rewards for productivity.

## 🚀 Features

- **User Authentication**: Secure sign up/login with Supabase Auth
- **Tool Management**: Add, organize, and track your digital tools and subscriptions
- **Tool Discovery**: Browse a curated library of 200+ tools across multiple categories
- **Rewards System**: Earn points for adding and organizing tools
- **Real-time Data**: All data synced with Supabase PostgreSQL database
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Protected Routes**: Secure dashboard and library pages for authenticated users

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Backend & Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- A Supabase account ([sign up here](https://supabase.com))

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
cd flowvahub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Supabase

#### Create a new Supabase project:
1. Go to [https://supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be fully provisioned
3. Go to Project Settings > API to find your credentials

#### Configure Google OAuth (Required):
1. In your Supabase dashboard, go to Authentication > Providers
2. Enable the Google provider
3. Follow Supabase's guide to set up Google OAuth:
   - Create a project in [Google Cloud Console](https://console.cloud.google.com)
   - Enable Google+ API
   - Create OAuth 2.0 credentials (Web application)
   - Add authorized redirect URI: `https://<your-project-ref>.supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase
4. Save the configuration

#### Run the database schema:
1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-schema.sql` from this project
3. Paste and run the SQL script to create all tables, policies, and sample data

### 4. Configure environment variables

Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these in: Supabase Dashboard > Project Settings > API

### 5. Run the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📊 Database Schema

The application uses four main tables:

- **tools**: Stores all available tools with name, category, description
- **user_tools**: Junction table linking users to their selected tools
- **user_rewards**: Tracks points earned by each user
- **auth.users**: Managed by Supabase Auth (automatic)

All tables have Row Level Security (RLS) enabled to ensure users can only access their own data.

## 🎯 How to Use

1. **Sign Up**: Create an account on the signup page
2. **Dashboard**: View your tools, rewards, and monthly costs
3. **Add Tools**: Manually add tools or browse the library
4. **Discover**: Explore the tool library with search and filters
5. **Earn Rewards**: Get points for adding tools (+10 for manual, +5 from library)

## 🧪 Key Features Implemented

### Authentication
- Email/password authentication via Supabase
- Google OAuth integration for quick sign-in
- Protected routes with automatic redirects
- Persistent sessions with auth state management
- User profile data stored in auth metadata

### Real Supabase Usage
- Direct database queries using Supabase client
- Row Level Security policies for data protection
- Real-time authentication state changes
- Proper error handling for all database operations

### State Management
- Loading states for all async operations
- Error states with user-friendly messages
- Empty states with helpful call-to-actions
- Success notifications for user actions

## 🎨 UI/UX Highlights

- Clean, modern design matching the original Flowvahub aesthetic
- Smooth transitions and hover effects
- Responsive grid layouts
- Intuitive navigation with clear CTAs
- Accessible form inputs with proper labels

## ⚙️ Assumptions & Trade-offs

### Assumptions:
1. **Sample Data**: The SQL schema includes 20 sample tools to populate the library
2. **Reward Points**: Simple point system (10 points for adding, 5 for discovering)
3. **Tool Pricing**: Monthly costs are tracked but no payment processing is implemented
4. **Email Verification**: Disabled by default for easier testing (can be enabled in Supabase)

### Trade-offs:
1. **No Image Uploads**: Tool logos are stored as URLs (not uploaded files) to keep setup simple
2. **Basic Search**: Client-side filtering instead of full-text search for simplicity
3. **Mobile App References**: Kept in UI but not functional (web-only implementation)
4. **Simplified Rewards**: Points system is basic - could be expanded with levels, badges, etc.

### What Could Be Enhanced:
- User profile customization
- Tool usage analytics and insights
- Social features (sharing stacks, recommendations)
- Integration with actual tool APIs
- Redemption system for reward points
- Advanced filtering and sorting options
- Tool reviews and ratings
- Export functionality for tool lists

## 🐛 Troubleshooting

**Error: Missing Supabase environment variables**
- Make sure you created the `.env` file and added your credentials

**Error: relation "tools" does not exist**
- Run the SQL schema in Supabase SQL Editor

**Error: Invalid login credentials**
- Check that email confirmation is disabled in Supabase Auth settings
- Or check your email for the confirmation link

**Tools not showing in library**
- Ensure the SQL script ran successfully and sample data was inserted

## 📝 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx     # Main navigation
│   ├── Footer.jsx     # Site footer
│   └── ProtectedRoute.jsx  # Auth guard
├── context/           # React context providers
│   └── AuthContext.jsx     # Authentication state
├── lib/               # Utility libraries
│   └── supabase.js    # Supabase client config
├── pages/             # Route pages
│   ├── Home.jsx       # Landing page
│   ├── Login.jsx      # Sign in page
│   ├── SignUp.jsx     # Registration page
│   ├── Dashboard.jsx  # User dashboard
│   └── Library.jsx    # Tool library
├── App.jsx            # Main app component with routes
└── main.jsx           # App entry point
```

## 🔐 Security Notes

- All database tables use Row Level Security (RLS)
- Users can only access their own data
- Authentication tokens are securely managed by Supabase
- Environment variables keep sensitive data out of source code

## 📄 License

This project was created as a technical assessment/demonstration.
