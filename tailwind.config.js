/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:"375px",
      md:'768px',
      lg:"1200px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      colors:{
      theme:'var(--theme)',
      },
      backgroundSize:{
        "full":'100% 100%'
      }
    },
  },
  plugins: [],
}
