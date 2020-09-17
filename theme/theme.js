import colors from "./colors";

export const sizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1200px",
};

export const typeScale = [
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "30px",
  "36px",
  "48px",
  "60px",
  "100px",
];

const themeCommon = {
  fontFamily: '"Poppins", serif',
  secondaryFontFamily: '"Poppins", serif',
  media: {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    desktop: `(max-width: ${sizes.desktop})`,
  },
  gradientV: `linear-gradient(0deg, #EAE6FF, #f50076)`,
  gradientH: `linear-gradient(90deg, #EAE6FF, #f50076)`,
  swapIfDark(prop1, prop2) {
    return `${this.dark ? this[prop1] : this[prop2]};`;
  },
};

export const themeLight = {
  dark: false,
  bgColor: "#f9f8ff",
  bgContrast: "#eae6ff",
  cardBg: "#f9f8ff",
  textNormal: "#091E42",
  shadow: "none",
  ...themeCommon,
};

export const themeDark = {
  dark: true,
  bgColor: "#18023b",
  bgContrast: "#38023b",
  cardBg: "#3a416f",
  textNormal: "#eae6ff",
  shadow: "none",
  ...themeCommon,
  ...colors,
};
