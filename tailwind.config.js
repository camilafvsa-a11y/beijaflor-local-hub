/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F4C81',
          hover: '#0D3B66',
          light: '#EBF3FA',
        },
        status: {
          critical: '#DC2626',
          warning: '#D97706',
          success: '#16A34A',
          info: '#2563EB',
        }
      },
    },
  },
  plugins: [],
}