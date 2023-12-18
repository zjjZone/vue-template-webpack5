/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    // disable preflight
    preflight: false
  }
}
