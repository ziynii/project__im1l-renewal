import { DefaultTheme } from 'styled-components';

const deviceSizes = {
  mobile: '767px',
  tablet: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};
export const theme: DefaultTheme = {
  mainColor: '#EDA483',
  textColor: '#3f3a39',
  device,
};
