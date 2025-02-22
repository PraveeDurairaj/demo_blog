
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      sm:"100%",
      md:'768px',
      lg:"1200px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md:'2rem'
      }
    
    },
    extend: {
      colors:{
      theme:'var(--theme)',
      },
      backgroundSize:{
        "full":'100% 100%'
      },
      objectPosition:{
        '0--1':'0px -1px',
      }
      
    },
  },
  plugins: [],
});