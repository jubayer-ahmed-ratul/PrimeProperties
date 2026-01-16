# PrimeProperties - Real Estate Platform

A modern real estate platform built with Next.js 16 featuring property listings, authentication, dynamic routing, and dark mode support.

## Project Description

PrimeProperties is a full-featured real estate web application that allows users to browse property listings, view detailed information about individual properties, and access protected routes through mock authentication. The platform features a responsive design with a modern UI built using Tailwind CSS and includes a complete dark mode implementation.

## Technology Stack

- Next.js 16.1.2 (App Router)
- React 19.2.3
- Tailwind CSS 4
- Font Awesome Icons
- Cookie-based Authentication

## Setup and Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. Clone the repository
```bash
git clone <repository-url>
cd primeproperties
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and navigate to
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## Route Summary

### Public Routes (No Authentication Required)
- `/` - Landing page with 7 sections (excluding Navbar and Footer)
- `/items` - Property listings page (Items/List page)
- `/items/[id]` - Individual property details page (dynamic route)
- `/blog` - Blog page with real estate articles
- `/contact` - Contact page with business information
- `/login` - Authentication page

### Protected Routes (Authentication Required)
- `/dashboard` - User dashboard (protected by middleware)
- `/profile` - User profile (protected by middleware)

**Note:** Protected routes automatically redirect to `/login` if user is not authenticated.

## Implemented Features

### 1. Landing Page (7 Sections + Navbar + Footer)
The home page includes the following sections:
1. **Hero/Banner** - Eye-catching introduction with statistics
2. **Info Section** - Why choose us (3 key features)
3. **Services** - Our service offerings
4. **Featured Properties** - Showcase of selected properties
5. **Testimonials** - Client reviews and feedback
6. **Call to Action** - Engagement section
7. **Footer** - Company info and social links

Plus **Navbar** at the top with navigation links to Login and Items pages

### 2. Mock Authentication System
- **Login Credentials:**
  - Email: `admin@primeproperties.com`
  - Password: `admin123`
- Cookie-based authentication (stores auth data in browser cookies)
- Protected routes redirect to login if not authenticated
- After successful login: Redirects user to the Items/List page (`/items`)
- **Logout Feature**: Clears cookies and redirects to home page

### 3. Item List Page (Publicly Accessible)
- Located at `/items` route
- Publicly accessible (no authentication required)
- Fetches data from `/public/items.json` file
- Displays property cards with:
  - Property name
  - Description
  - Price badge
  - Bedrooms, bathrooms, and area
  - Placeholder images with fallback
  - "View Details" button linking to individual property page

### 4. Item Details Page (Publicly Accessible)
- Dynamic route: `/items/[id]`
- Publicly accessible (no authentication required)
- Shows complete property information:
  - Large property image
  - Full description
  - Detailed specifications (bedrooms, bathrooms, area, property ID)
  - Contact and scheduling buttons
- Back navigation to listings

### 5. Data Source
- JSON file located at `/public/items.json`
- Contains 6 sample properties with complete information
- No Express.js backend required (JSON data alone is sufficient)
- Each property includes: id, name, description, price, image, bedrooms, bathrooms, area

### 6. Navigation (Navbar)
- Responsive navbar with mobile menu
- Links to:
  - Home page (`/`)
  - Items/List page (`/items`) - as required
  - Blog page (`/blog`)
  - Contact page (`/contact`)
  - Login page (`/login`) - as required
- Dynamic Login/Logout button based on authentication status
- Consistent across all pages

### 7. Additional Features
- **Blog Page**: 3 blog posts about real estate with newsletter subscription
- **Contact Page**: Business contact information (phone: 01863483503, email, address, map)
- **Dark Mode**: Full dark mode support across all pages
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Route Protection**: Middleware protects sensitive routes from unauthenticated access

## Features Explanation

### Authentication Flow
The mock authentication system uses browser cookies to maintain session state. When users log in with correct credentials (`admin@primeproperties.com` / `admin123`), an auth cookie is set that allows access to protected routes. The middleware checks for this cookie on protected routes and redirects unauthenticated users to the login page. Users can logout by clicking the Logout button in the navbar, which clears the cookies and redirects to the home page.

### Dynamic Routing
The item details page uses Next.js dynamic routing with the `[id]` parameter. When a user clicks "View Details" on any property, they're taken to `/items/[id]` where the specific property data is fetched from the JSON file and displayed.

### Data Fetching
Property data is fetched client-side from the static JSON file in the public folder. This approach is simple, fast, and doesn't require a backend server. The data includes all necessary property information including images, prices, and specifications.

### Route Protection
The middleware (`src/middleware.js`) intercepts requests to protected routes (`/dashboard`, `/profile`) and checks for the auth cookie. If the cookie is not present or invalid, users are automatically redirected to the login page.

### Responsive Design
The application uses Tailwind CSS utility classes to create a fully responsive layout. The grid system automatically adjusts from single column on mobile to multiple columns on larger screens, ensuring optimal viewing on any device.

### Dark Mode
Complete dark mode implementation with:
- Pure black backgrounds (`dark:bg-black`)
- Proper text contrast for readability
- Smooth transitions between light and dark modes
- Persistent theme preference (saved in localStorage)
- All components and pages support dark mode

## Project Structure

```
primeproperties/
├── public/
│   ├── items.json          # Property data (6 sample properties)
│   └── *.svg               # Static assets
├── src/
│   ├── app/
│   │   ├── Component/
│   │   │   ├── Navbar/     # Navigation component
│   │   │   ├── Home/       # Hero/Banner section
│   │   │   ├── InfoSection/# Features section
│   │   │   ├── Services/   # Services section
│   │   │   ├── ItemList/   # Property listings
│   │   │   ├── Testimonials/# Client reviews
│   │   │   ├── CTA/        # Call to action
│   │   │   └── Footer/     # Footer component
│   │   ├── blog/
│   │   │   └── page.js     # Blog page
│   │   ├── contact/
│   │   │   └── page.js     # Contact page
│   │   ├── context/
│   │   │   └── ThemeContext.js # Dark mode context
│   │   ├── items/
│   │   │   ├── [id]/       # Dynamic property details
│   │   │   └── page.js     # All properties page
│   │   ├── login/
│   │   │   └── page.js     # Login page
│   │   ├── layout.js       # Root layout
│   │   ├── page.js         # Home page (7 sections)
│   │   └── globals.css     # Global styles
│   └── middleware.js       # Route protection
├── package.json
└── README.md
```

## Demo Credentials

For testing the authentication system:
- **Email:** admin@primeproperties.com
- **Password:** admin123

## Requirements Compliance

✅ **Technology**: Built with Next.js 16.1.2 using App Router
✅ **Landing Page**: Contains 7 sections (excluding Navbar and Footer)
✅ **Navbar Links**: Includes links to Login page and Items/List page
✅ **Mock Authentication**: Hardcoded credentials with cookie-based storage
✅ **Route Protection**: Middleware protects routes from unauthenticated users
✅ **Login Redirect**: Redirects to Items/List page after successful login
✅ **Item List Page**: Publicly accessible, fetches from JSON file
✅ **Item Cards**: Display name, description, price, image, and other properties
✅ **Item Details Page**: Full details with dynamic route
✅ **Public Access**: Item pages are publicly accessible
✅ **Data Source**: Uses JSON file (Express.js backend not required)
✅ **README.md**: Complete documentation with all required sections

## Future Enhancements

- Add search and filter functionality
- Implement real backend API
- Add user registration
- Include property comparison feature
- Add favorites/wishlist functionality
- Integrate map view for properties
- Add contact form functionality

## License

This project is for educational purposes.

