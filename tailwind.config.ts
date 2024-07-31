import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {'sm': '500px', 'md': '700px', 'lg': '1024px', 'xl': '1280px'},
      fontFamily:
      {
        sans: ["SF Pro Display", "Segoe UI" ],
      },
      colors: {
        background: "#000212",
        white: "#ffffff",
        grey: "#858699",
        "white-a08": "rgba(255, 255, 255, 0.12)",
      },
      fontSize: {
        md: "1.6rem",
        lg: "1.7rem",
        "5xl":["5rem", "1.0"],
        "4xl":["4rem", "1.0"],
        "3xl":["3.1rem", "1.0"],
        "2xl":["1.4rem", "1.3"],
        "1xl":["1.1rem", "1.3"],
        "xl":["1.0rem", "1.4"],
           /*the second value after comma is line spacing*/
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        12: "4.8rem",
        14: "5.6rem",
      },
      boxShadow: {
        primary: "rgb(80 60 205 / 50%) 0px 1px 40px",	
      },
    },
  },
  plugins: [],
};
export default config;