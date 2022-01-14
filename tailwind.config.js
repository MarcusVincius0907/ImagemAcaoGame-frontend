module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ia-purple-light': '#51324F',
        'ia-purple-med': '#40273E',
        'ia-purple-dark': '#261144',

        'ia-brown-dark': '#AF8470',
        'ia-brown-light': '#D9A993',

      },
      maxWidth: {
        'container': '1225px',
        'card': '550px',
      }
    },
  },
  plugins: [],
}