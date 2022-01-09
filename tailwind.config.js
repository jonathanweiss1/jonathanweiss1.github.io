module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      radley: ['Radley, serif'],
      raleway: ['Raleway, sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      altpro_rgbg_main_color: {
        light: '#ffc6cd',
        DEFAULT: '#ff6e86',
      },
      altpro_rgbg_blue: {
        light: '#97d4f7',
        DEFAULT: '#7196ab',
      },
      altpro_rgbg_red: {
        DEFAULT: '#4f131d',
      },
      altpro_rgbg_yellow: {
        DEFAULT: '#f7f7c8',
      },
      altpro_rgbg_brown: {
        light: '#d8b3ac',
        DEFAULT: '#a06e64',
        dark: '#835a5f',
        reddish: '#ab686c',
      },
      altpro_rgbg_white: {
        DEFAULT: '#fcf0e7',
        green: '#fefff8',
      },
      altpro_rgbg_gray: {
        DEFAULT: '#2b2b2b',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
