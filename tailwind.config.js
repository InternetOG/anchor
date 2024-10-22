/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Header and Hero Setion
        'custom-max': {'max': '750px'},
        'custom-min': '750px',
        // Testimony setion
        'custom-footer': {'max': '1100px'},
        'custom-footerMini': {'max': '650px'},
        'custom-story': {'max': '1000px'},
        'custom-storyMini': {'max': '900px'},
        'custom-contact': {'max': '649px'},
        'custom-storyMiniPro': {'max': '700px'},
      },
    },
  },
  plugins: [],
} 