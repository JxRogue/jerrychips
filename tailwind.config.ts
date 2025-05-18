
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
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
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					'neon-green': '#39FF14',
					'neon-blue': '#00FFFF',
					'neon-pink': '#FF00FF',
					'dark': '#121212',
					'darker': '#0a0a0a',
					'terminal': '#0C0C0C',
					'text': '#E0E0E0',
					'accent': '#FF003C',
					'success': '#00FF9F',
					'warning': '#FFCC00',
					'error': '#FF0000',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-3px, 3px)' },
					'40%': { transform: 'translate(-3px, -3px)' },
					'60%': { transform: 'translate(3px, 3px)' },
					'80%': { transform: 'translate(3px, -3px)' },
					'100%': { transform: 'translate(0)' }
				},
				'text-flicker': {
					'0%': { opacity: '0.1' },
					'2%': { opacity: '1' },
					'8%': { opacity: '0.1' },
					'9%': { opacity: '1' },
					'12%': { opacity: '0.1' },
					'20%': { opacity: '1' },
					'25%': { opacity: '0.3' },
					'30%': { opacity: '1' },
					'70%': { opacity: '0.7' },
					'72%': { opacity: '0.2' },
					'77%': { opacity: '.9' },
					'100%': { opacity: '.9' }
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'terminal-cursor': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s infinite',
				'text-flicker': 'text-flicker 3s linear infinite',
				'scanline': 'scanline 6s linear infinite',
				'terminal-cursor': 'terminal-cursor 1s infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(2, 17, 20, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 17, 20, 0.9) 1px, transparent 1px)',
				'cyber-gradient': 'linear-gradient(180deg, rgba(18, 18, 18, 0.9) 0%, rgba(10, 10, 10, 1) 100%)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
