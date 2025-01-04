/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'primary': '#ff3f3a',
        'secondary': '#ffcf2d',
        'success': '#03cea4',
        'danger': '#ff4242',
        'pink': '#f52f6e',
        'warning': '#f89828',
        'info': '#5a87fc',
        'border' : '#F75E05',
        'bg-color': '#FEDCD1',
        'gray-900': '#1e212c',
        'gray-800': '#424551',
        'gray-700': '#787a80',
        'gray-600': '#9a9ca5',
        'gray-500': '#b3b7bc',
        'gray-400': '#d7dadd',
        'gray-300': '#e5e8ed',
        'gray-200': '#f4f5f6',
        'gray-100': '#f9f9f9'
      },
      keyframes: {
        appearance: {
          '0%': { opacity: 0},
          '100%': { opacity: 1 }
        }
      },
      animation: {
        appearance: 'appearance .5s ease-in-out 1',
      }
    },
  },
  plugins: [],
}

