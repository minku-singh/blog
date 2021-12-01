const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#ffa500',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#080808',
    heading: '#ffa500',
    text: '#fff',
    preFormattedText: '#000',
    link: '#ffa500',
  },
};

export { lightTheme, darkTheme };
