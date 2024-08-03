const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors")

// import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   extend:{
    backgroundColor: {
      'primary' : 'rgb(52 211 153)',
      'secondary' : 'rgb(5 150 105)'
    },
    colors:{
      'primary' : 'rgb(52 211 153)',
       green: colors.emerald
    }
   }
  },
  plugins: [],
};
// export default config;


module.exports = withMT(config)
