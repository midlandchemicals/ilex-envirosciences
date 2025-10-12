// Ilex EnviroSciences Brand Color System
// Consistent colors across all product pages to match homepage

export const brandColors = {
  // Primary Brand Colors
  primary: {
    main: '#6abf4b',      // Main brand green
    hover: '#5aa338',     // Darker green for hover states
    light: '#85d963',     // Lighter green for accents
    dark: '#4a9933',      // Dark green for text
  },
  
  // Secondary Colors (complementary to green)
  secondary: {
    blue: '#4a9ab8',      // Professional blue
    blueLight: '#6bb4d1', // Light blue
    blueDark: '#2d7a99',  // Dark blue
  },
  
  // Background Colors
  background: {
    main: '#ffffff',      // Pure white
    light: '#ececec',     // Light grey (header color)
    lighter: '#f8f8f8',   // Very light grey
    card: '#ffffff',      // Card backgrounds
    gradient: {
      start: '#f0f9ff',   // Very light blue-green
      end: '#f0fdf4',     // Very light green
    }
  },
  
  // Text Colors
  text: {
    primary: '#1a1a1a',   // Almost black
    secondary: '#4a4a4a', // Dark grey
    muted: '#6b6b6b',     // Medium grey
    light: '#9ca3af',     // Light grey
  },
  
  // Status & Accent Colors
  accent: {
    success: '#6abf4b',   // Same as primary green
    warning: '#f59e0b',   // Amber/Orange
    error: '#ef4444',     // Red
    info: '#3b82f6',      // Blue
  },
  
  // Product Page Specific
  hero: {
    background: 'linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%)',
    overlay: 'rgba(106, 191, 75, 0.05)',
  },
  
  // Badge Colors (matching brand)
  badge: {
    primary: {
      bg: '#e8f5e3',      // Very light green
      text: '#4a9933',    // Dark green
    },
    secondary: {
      bg: '#ececec',      // Light grey
      text: '#4a4a4a',    // Dark grey
    },
  },
  
  // Button Colors
  button: {
    primary: {
      bg: '#6abf4b',
      hover: '#5aa338',
      text: '#ffffff',
    },
    secondary: {
      bg: '#ffffff',
      hover: '#ececec',
      text: '#6abf4b',
      border: '#6abf4b',
    },
  },
  
  // Section Backgrounds
  section: {
    white: '#ffffff',
    light: '#fafafa',
    lightGreen: '#f0fdf4',
    lightGrey: '#f8f8f8',
    grey: '#ececec',
  }
};

// Helper function to create gradients
export const createGradient = (color1: string, color2: string, direction: string = '135deg') => {
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
};

// Tailwind class mappings for easy use
export const brandClasses = {
  // Backgrounds
  bgPrimary: 'bg-[#6abf4b]',
  bgPrimaryHover: 'hover:bg-[#5aa338]',
  bgLight: 'bg-[#ececec]',
  bgWhite: 'bg-white',
  
  // Text
  textPrimary: 'text-[#6abf4b]',
  textDark: 'text-[#1a1a1a]',
  textMuted: 'text-[#6b6b6b]',
  
  // Borders
  borderPrimary: 'border-[#6abf4b]',
  borderLight: 'border-[#ececec]',
  
  // Buttons
  btnPrimary: 'bg-[#6abf4b] hover:bg-[#5aa338] text-white',
  btnSecondary: 'bg-white hover:bg-[#ececec] text-[#6abf4b] border-2 border-[#6abf4b]',
  
  // Cards
  cardBorder: 'border border-[#ececec]',
  cardShadow: 'shadow-sm hover:shadow-md',
  
  // Badges
  badgePrimary: 'bg-[#e8f5e3] text-[#4a9933]',
  badgeSecondary: 'bg-[#ececec] text-[#4a4a4a]',
};
