module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-Image": 'url("https://source.unsplash.com/1L71sPT5XKc")',
        "profile-back":
          "url('https://images.unsplash.com/photo-1498962342534-ee08a0bb1d45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
