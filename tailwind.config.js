module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          sans:["vazir"],
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms")({
        strategy: 'base', // only generate global styles
        strategy: 'class', // only generate classes
      }),
    ],
  }