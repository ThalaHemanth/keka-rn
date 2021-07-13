import 'styled-components/native';
import {DefaultTheme} from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      greyDarkest: string;
      greyDarker: string;
      greyDark: string;
      grey: string;
      greyLight: string;
      greyLighter: string;
      greyLightest: string;
      white: string;
      redDarkest: string;
      redDarker: string;
      redDark: string;
      red: string;
      redLight: string;
      redLighter: string;
      redLightest: string;
      blueDarkest: string;
      blueDarker: string;
      blueDark: string;
      blue: string;
      blueLight: string;
      blueLighter: string;
      blueLightest: string;
      purpleDarkest: string;
      purpleDarker: string;
      purpleDark: string;
      purple: string;
      purpleLight: string;
      purpleLighter: string;
      purpleLightest: string;
      greenDarkest: string;
      greenDarker: string;
      greenDark: string;
      green: string;
      greenLight: string;
      greenLighter: string;
      greenLightest: string;
    };
  }
}

export const theme: DefaultTheme = {
  color: {
    black: '#212121',

    greyDarkest: '#242424',
    greyDarker: '#616161',
    greyDark: '#757575',
    grey: '#9e9e9e',
    greyLight: '#bdbdbd',
    greyLighter: '#e0e0e0',
    greyLightest: '#eeeeee',

    white: '#fff',
    redDarkest: '#b71c1c',
    redDarker: '#c62828',
    redDark: '#d32f2f',
    red: '#f44336',
    redLight: '#ef5350',
    redLighter: '#e57373',
    redLightest: '#ef9a9a',

    blueDarkest: '#0d47a1',
    blueDarker: '#1565c0',
    blueDark: '#1976d2',
    blue: '#2196f3',
    blueLight: '#42a5f5',
    blueLighter: '#64b5f6',
    blueLightest: '#90caf9',

    purpleDarkest: '#4a148c',
    purpleDarker: '#6a1b9a',
    purpleDark: '#7b1fa2',
    purple: '#9c27b0',
    purpleLight: '#ab47bc',
    purpleLighter: '#ba68c8',
    purpleLightest: '#ce93d8',

    greenDarkest: '#1b5e20',
    greenDarker: '#2e7d32',
    greenDark: '#388e3c',
    green: '#4caf50',
    greenLight: '#66bb6a',
    greenLighter: '#81c784',
    greenLightest: '#a5d6a7',
  },
};
