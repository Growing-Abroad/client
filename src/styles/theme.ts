import { variables } from './global-variables';

type ITheme = Record<string, Record<string, string>>;

const { sizes } = variables;

export const theme = {
  colors: {
    primaryBlue: '#05335b',
    primaryYellow: '#FFDB5C',
    secondaryBlue: '#4a9afd',
    terciaryBlue: '#EDF5FF',
    fourthBlue: '#1E80C1',
    gray1: '#9DA5AF',
    white: '#FFFFFF',
    backgroundBlue: '#128FC8',

    blue400: '#4A9AFD',
    blue500: '#0073CF',
    blue700: '#05335B',
    yellow400: '#FFDB5C',
    themeBlue: '#0073CF',
  },
  sizes,
};
