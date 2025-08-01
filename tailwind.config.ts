import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // keyframes: {
      //   'accordion-down': {
      //     from: { height: '0' },
      //     to: { height: 'var(--radix-accordion-content-height)' },
      //   },
      //   'accordion-up': {
      //     from: { height: 'var(--radix-accordion-content-height)' },
      //     to: { height: '0' },
      //   },
      //   'fade-in': {
      //     '0%': { opacity: '0' },
      //     '100%': { opacity: '1' },
      //   },
      //   'fade-in-up': {
      //     '0%': { opacity: '0', transform: 'translateY(20px)' },
      //     '100%': { opacity: '1', transform: 'translateY(0)' },
      //   },
      //   'fade-in-down': {
      //     '0%': { opacity: '0', transform: 'translateY(-20px)' },
      //     '100%': { opacity: '1', transform: 'translateY(0)' },
      //   },
      //   'pulse-subtle': {
      //     '0%, 100%': { opacity: '1' },
      //     '50%': { opacity: '0.8' },
      //   },
      //   float: {
      //     '0%, 100%': { transform: 'translateY(0)' },
      //     '50%': { transform: 'translateY(-10px)' },
      //   },
      //   'scale-up': {
      //     '0%': { transform: 'scale(0.9)' },
      //     '100%': { transform: 'scale(1)' },
      //   },
      // },
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out',
      //   'fade-in': 'fade-in 0.5s ease-out',
      //   'fade-in-up': 'fade-in-up 0.7s ease-out',
      //   'fade-in-down': 'fade-in-down 0.7s ease-out',
      //   'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      //   float: 'float 6s ease-in-out infinite',
      //   'scale-up': 'scale-up 0.5s ease-out',
      // },

      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'plane-move': {
          '0%': {
            transform: 'translateY(0) translateX(-50%)',
          },
          '100%': {
            transform: 'translateY(100px) translateX(-50%)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'plane-move': 'plane-move 0.5s ease-in-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
