const DEVICE_TYPES = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile'
};

const isMobile = ua =>
  !!ua.match(
    /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/
  );
const isTablet = ua =>
  ua.match(/ipad/) ||
  (ua.match(/android/) && !ua.match(/mobi|mini|fennec/)) ||
  (ua.match(/macintosh/) &&
    typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.maxTouchPoints > 1);
const isDesktop = ua =>
  ua.match(/linux|windows (nt|98)|macintosh|cros/) &&
  !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/);

export const getCurrentDevice = ua => {
  if (isDesktop(ua)) return DEVICE_TYPES.DESKTOP;
  if (isTablet(ua)) return DEVICE_TYPES.TABLET;
  if (isMobile(ua)) return DEVICE_TYPES.MOBILE;
};
