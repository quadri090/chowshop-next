import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-green': '#5EA304;',
        'primary-red': '#ff9804',
        'primary-grey': '#4E4D4D',
        'primary-light-grey': '#696969',
        'primary-very-light-grey': '#C9C9C9',
        'primary-mid-grey': '#A5A5A5'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'Roboto']
      },
      boxShadow: {
        'myBoxShadow':' 0px 0px 3px 1.5px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}
export default config
