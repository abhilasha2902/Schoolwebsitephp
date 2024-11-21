/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          primary: {
            blue: '#7EACB5',
            yellow: '#FADFA1',
            pink: '#C96868',
            light: '#FFF4EA',
          },
          'primary-blue': '#1e40af',
        },
      },
    },  
  plugins: [],
};
