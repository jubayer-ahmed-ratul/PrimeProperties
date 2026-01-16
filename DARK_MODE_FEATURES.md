# Dark Mode Implementation

## Features Added

### 1. Theme Context
- Created `src/app/context/ThemeContext.js` with React Context API
- Manages dark mode state globally
- Persists theme preference in localStorage
- Automatically applies saved theme on page load

### 2. Theme Toggle Button
- Added to Navbar (both desktop and mobile views)
- Sun icon for dark mode (to switch to light)
- Moon icon for light mode (to switch to dark)
- Smooth transitions between themes

### 3. Updated Components

All components now support dark mode with appropriate color schemes:

- **Navbar**: Dark background with light text
- **Banner/Hero**: Adjusted gradient for dark mode
- **Info Section**: Dark cards with proper contrast
- **Services**: Dark background with light text
- **Item List**: Dark cards for property listings
- **Testimonials**: Dark testimonial cards
- **CTA Section**: Darker blue background
- **Footer**: Already dark, enhanced for consistency
- **Login Page**: Dark form with proper input styling
- **Items Page**: Dark property cards
- **Item Details Page**: Dark detail view

### 4. Color Scheme

**Light Mode:**
- White backgrounds
- Gray-800 text
- Gray-50/100 for secondary backgrounds

**Dark Mode:**
- Gray-900 backgrounds
- White text
- Gray-800 for secondary backgrounds
- Gray-700 for borders and inputs

### 5. Smooth Transitions
- All color changes have `transition-colors duration-300`
- Provides smooth visual feedback when toggling

## Usage

Click the sun/moon icon in the navbar to toggle between light and dark modes. Your preference is automatically saved and will persist across sessions.

## Technical Implementation

- Uses Tailwind CSS `dark:` variant
- HTML element gets `dark` class when dark mode is active
- CSS custom properties for primary/secondary colors remain consistent
- All components wrapped in ThemeProvider in root layout
