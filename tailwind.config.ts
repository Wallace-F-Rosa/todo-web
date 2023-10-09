import type { Config } from 'tailwindcss'
import flowbite from 'flowbite/plugin'
import colors from 'tailwindcss/colors'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-react/**/*.js',
    ],
    theme: {
        colors: {
            white2: '#CCDBDC',
            'secondary-light': '#9AD1D4',
            'primary-light': '#80CED7',
            'secondary-dark': '#003249',
            'primary-dark': '#007ea7',
            black: colors.black,
            blue: colors.blue,
            slate: colors.slate,
            gray: colors.slate,
            red: colors.red,
            yellow: colors.yellow,
            orange: colors.orange,
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [flowbite],
}
export default config
