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
        },
        'slider-active-left': {
          '0%': {
            position: "absolute",
            right: "auto",
            left: "-2000px"
          },
          '99%': {
            left: "-10px",
            right: "auto",
            position: "absolute"
          },
          '100%': {
            left: 0,
            position: "static"
          }
        },
        'slider-active-right': {
          '0%': {
            position: "absolute",
            left: "auto",
            right: "-2000px"
          },
          '99%': {
            right: "-10px",
            left: "auto",
            position: "absolute"
          },
          '100%': {
            right: 0,
            position: "static"
          }
        },
        'slider-translate-left': {
          '0%': {
            display: "flex",
            left: 0,
            right: "auto"
          },
          '95%': {
            left: "-1900px",
            right: "auto"
          },
          '100%': {
            left: '-2000px',
            display: 'none'
          }
        },
        'slider-translate-right': {
          '0%': {
            display: "flex",
            right: 0,
            left: "auto",
          },
          '95%': {
            right: "-1900px",
            left: "auto",
          },
          '100%': {
            right: '-2000px',
            display: 'none'
          }
        }
      },
      animation: {
        appearance: 'appearance .5s ease-in-out 1',
        'slider-active-left': 'slider-active-left 1.5s ease-in-out 1',
        'slider-translate-left': 'slider-translate-left 1.5s ease-in-out 1',
        'slider-active-right': 'slider-active-right 1.5s ease-in-out 1',
        'slider-translate-right': 'slider-translate-right 1.5s ease-in-out 1'
      }
    },
  },
  plugins: [],
}

