/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'MainBg' : "url('/MainBackground.jpg')",
      },
      backgroundPosition:{
        'sizeManiBg' : "center bottom -150px",
        'sizeManiBgXL' : "center bottom 0px",
      },
      fontFamily:{
        'PixelifySans' : 'PixelifySans',
        'hasti' : 'hasti'
      },
      dropShadow:{
        'subText' : '5px 19px 16px 0px #FFFFFF'
      },
      cursor:{
        'MACrs' : 'url("/Coursor.png") , auto'
      },
      container:{
        center : true,
        padding:{
          DEFAULT: '200px',
          sm: '20px',
          lg: '100px',
          xl: '200px',
        },
      }
    },
  },
  plugins: [],
};
