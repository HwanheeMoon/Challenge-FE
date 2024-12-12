const { default: daisyui } = require("daisyui");

/** @type {import {  } from "(tailwindcss).Config";} */
module.exports = {
   content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
   theme: {
      extend: {},
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light"],
   },
};

// export const content = ["./src/**/*.{html,js,ts,tsx,jsx}"];
// export const theme = {
//    extend: {
//    },
// };
// export const plugins = [require("daisyui")];
