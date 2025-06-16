const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    container:{
      center:true,
      padding:"70px"
    },
    extend: {},
  },
  plugins: [  flowbite.plugin()],
}

