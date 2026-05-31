/** @type {import('tailwindcss').Config} */
module.exports = {
  // Mode sombre activé via la classe `.dark` sur <html>
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      // Toutes les couleurs viennent de variables CSS — un seul set de classes
      // qui s'adapte automatiquement quand on toggle .dark sur <html>
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'border-base': 'var(--border)',
        'border-strong': 'var(--border-strong)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'text-dim': 'var(--text-dim)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        success: 'var(--success)',
      },
      fontFamily: {
        // Fraunces pour les titres / nom de marque (typo serif éditoriale)
        serif: ['Fraunces', 'Georgia', 'serif'],
        // Inter pour le corps
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'h1-mobile': ['36px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1-desktop': ['56px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2-desktop': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        prose: '720px',
        layout: '1180px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
