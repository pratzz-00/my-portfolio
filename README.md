# 🌟 My Portfolio Website

A modern, full-stack portfolio website built with React, Tailwind CSS, and Supabase. Features a complete admin panel for managing projects, blog posts, and contact messages.

## 🚀 Live Site

🔗 https://pratibha-alpha.vercel.app/

## ✨ Features

### Public Features
- 🎨 **Beautiful UI/UX** - Clean, minimal design with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Project Showcase** - Detailed project pages with tech stacks
- 📝 **Blog Section** - Markdown-supported blog posts
- 💬 **Contact Form** - Direct message submission to database
- ⚡ **Fast Performance** - Optimized with Vite build tool

### Admin Features
- 🔐 **Secure Authentication** - Protected admin panel with Supabase Auth
- 📊 **Project Management** - Full CRUD operations for projects
- ✍️ **Blog Management** - Create, edit, and publish blog posts with markdown
- 📬 **Message Management** - View and manage contact form submissions
- 🎛️ **Rich Editor** - Add detailed project information, key features, screenshots
- 🏷️ **SEO-Friendly** - Auto-generated slugs for projects and blog posts

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **React Markdown** - Markdown rendering for blog posts
- **React Hot Toast** - Elegant notifications

### Backend
- **Supabase** - Backend as a Service (BaaS)
  - PostgreSQL database
  - Authentication
  - Row Level Security (RLS)
  - Real-time subscriptions

### Deployment
- **Vercel** - Frontend hosting
- **Supabase Cloud** - Database and auth



## 🖼️ Screenshots

### Homepage
<img width="900" height="400" alt="image" src="https://github.com/user-attachments/assets/76d0ff2f-a060-43c3-8488-3ad0cb1b310f" />

### About Page
<img width="600" height="400" alt="image" src="https://github.com/user-attachments/assets/ab19dd28-0a14-418d-8021-dcf04f49826b" />


### Admin Dashboard
<img width="900" height="400" alt="image" src="https://github.com/user-attachments/assets/2982013b-7cc7-4794-ad18-816d0e73e35c" />



## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema (see `database-schema.sql`)
   - Get your project URL and anon key

4. **Configure environment variables**
   Create a `.env` file in the root directory:
```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. **Run the development server**
```bash
   npm run dev
```

6. **Open your browser**
   Navigate to `http://localhost:5173`

### Create Admin User

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Users**
3. Click **Add User** → **Create new user**
4. Enter your email and password
5. Now you can login at `/admin`

## 📝 Database Schema

The project uses the following Supabase tables:

- **projects** - Portfolio projects with detailed information
- **blog_posts** - Blog articles with markdown content
- **contact_messages** - Messages from the contact form

See `database-schema.sql` for the complete schema.

## 🎨 Customization

### Update Personal Information

1. **Name & Links**: Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`
2. **About Page**: Customize `src/pages/AboutPage.jsx`
3. **Homepage Content**: Modify `src/pages/HomePage.jsx`
4. **Favicon & Title**: Update `index.html`

### Add Projects

1. Login to admin panel at `/admin`
2. Navigate to **Projects** tab
3. Click **Add Project**
4. Fill in all details (title, description, tech stack, etc.)
5. Click **Add Project** to save

### Style Changes

All styles use Tailwind CSS. Modify classes directly in components or update `tailwind.config.js` for theme changes.

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
   - Click **Deploy**

3. **Done!** Your site will be live in ~60 seconds

### Automatic Deployments

Every push to the `main` branch automatically deploys to Vercel. No manual deployment needed!

## 🔒 Security

- Environment variables are never exposed in the client bundle
- Admin routes are protected with Supabase authentication
- Row Level Security (RLS) policies protect database tables
- API keys use Supabase's anon key (public-safe)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pratibha**

- LinkedIn: [Pratibha](https://www.linkedin.com/in/pratibha-10b71321a/)
- Portfolio: [Your Live Site](https://pratibha-alpha.vercel.app/)


---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ and lots of ☕
