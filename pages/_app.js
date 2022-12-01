import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '#9DF3BA',
      primaryLightHover: '#9DF3BA',
      primaryLightActive: '#3FBB82',
      primaryLightContrast: '#0C7A5D',
      primary: '#118F61',
      primaryBorder: '#118F61',
      primaryBorderHover: '#0C7A5D',
      primarySolidHover: '#086657',
      primarySolidContrast: '$white',
      primaryShadow: '#118F61',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD'
    },
    space: {},
    fonts: {}
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
