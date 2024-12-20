import type { CSSObject } from '@mui/material';
import type { } from '@mui/material/themeCssVarsAugmentation';
import {
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
  PaletteColorOptions
} from '@mui/material/styles'

import { Commissioner } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import type { ApplyDarkStyles } from './brandingTheme'

export const commissioner = Commissioner({
  subsets: ['latin', 'cyrillic'],
})

export const montserrat = Montserrat({
  display: 'auto',
  subsets: ['latin', 'cyrillic'],
})

export const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

// interface ApplyDarkStyles {
//   (scheme: CSSObject): CSSObject;
// }

// declare module '@mui/material/styles' {
//   interface Theme {
//     applyDarkStyles: ApplyDarkStyles;
//   }

//   interface PaletteOptions {
//     primaryDark?: PaletteColorOptions;
//   }
// }

// declare module '@mui/material/styles/createPalette' {
//   interface ColorRange {
//     50: string;
//     100: string;
//     200: string;
//     300: string;
//     400: string;
//     500: string;
//     600: string;
//     700: string;
//     800: string;
//     900: string;
//   }

//   interface PaletteColor extends ColorRange { }

//   interface Palette {
//     primaryDark: PaletteColor;
//     gradients: {
//       radioSubtle: string;
//       linearSubtle: string;
//     };
//   }

//   interface TypeText {
//     tertiary: string;
//   }
// }

// declare module '@mui/material/styles/createTypography' {
//   interface TypographyOptions {
//     fontWeightSemiBold?: number;
//     fontWeightExtraBold?: number;
//     fontFamilyCode?: string;
//     fontFamilySystem?: string;
//   }

//   interface Typography {
//     fontWeightSemiBold: number;
//     fontWeightExtraBold: number;
//     fontFamilyCode: string;
//     fontFamilySystem: string;
//   }
// }

export const blueDark = {
  50: 'hsl(210, 14%, 92%)',
  100: 'hsl(210, 14%, 87%)',
  200: 'hsl(210, 14%, 72%)',
  300: 'hsl(210, 14%, 56%)',
  main: 'hsl(210, 14%, 56%)',
  400: 'hsl(210, 14%, 36%)',
  500: 'hsl(210, 14%, 28%)',
  600: 'hsl(210, 14%, 22%)',
  700: 'hsl(210, 14%, 13%)',
  800: 'hsl(210, 14%, 9%)',
  900: 'hsl(210, 14%, 7%)',
};

export const colors = {
  blue: {
    light: '#4AC3FF',
    main: '#32A9FE',
    mainDark: darken('#32A9FE', 0.2),
    dark: '#294E85',
  },
  yellow: {
    main: '#FFCB57',
    dark: '#F6992B',
  },
  gray: {
    main: '#F5F5F5',
    background: '#FAFAFA',
  },
  white: {
    main: '#ffffff',
  },
  red: {
    error: '#ED1D1D',
  },
}

const borders = {
  dark: colors.blue.dark,
  light: colors.blue.main,
  round: '60px',
  semiRound: '20px',
  input: 'rgba(0, 0, 0, 0.23)',
}

const theme: Theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  palette: {
    mode: 'light',
    primary: {
      light: colors.blue.light,
      main: colors.blue.main,
      dark: colors.blue.dark,
    },
    primaryDark: blueDark,
    secondary: {
      main: colors.yellow.main,
      light: colors.gray.main,
    },
    background: {
      default: colors.white.main,
    },
    info: {
      main: colors.blue.dark,
      light: colors.blue.mainDark,
      dark: darken(colors.blue.dark, 0.2),
    },
    error: {
      main: colors.red.error,
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          lineHeight: 2,
          borderRadius: '25px',
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
        textPrimary: {
          color: colors.blue.dark,
          '&:hover': {
            color: colors.blue.mainDark,
          },
        },
        outlined: {
          backgroundColor: colors.white.main,
        },
        outlinedPrimary: {
          color: colors.blue.dark,
          '&:hover': {
            backgroundColor: lighten(colors.blue.main, 0.85),
          },
        },
        outlinedSecondary: {
          color: darken(colors.yellow.dark, 0.4),
          borderColor: colors.yellow.main,
          '&:hover': {
            backgroundColor: lighten(colors.yellow.main, 0.85),
            borderColor: darken(colors.yellow.main, 0.15),
          },
        },
        containedPrimary: {
          backgroundColor: colors.blue.main,
          '&:hover': {
            backgroundColor: darken(colors.blue.main, 0.15),
          },
        },
        containedSecondary: {
          backgroundColor: colors.yellow.main,
          '&:hover': {
            backgroundColor: darken(colors.yellow.main, 0.15),
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: borders.round,
        },
        multiline: {
          borderRadius: borders.semiRound,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: borders.round,
        },
        multiline: {
          borderRadius: borders.semiRound,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borders.round,
        },
        multiline: {
          borderRadius: borders.semiRound,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },

    MuiMenuItem: {
      defaultProps: {
        sx: { py: 1.5 },
      },
    },
  },

  typography: {
    fontFamily: commissioner.style.fontFamily,

    fontFamilyCode: [
      'Menlo', // macOS
      'Consolas', // Windows
      '"Droid Sans Mono"', // Linux
      'monospace', // fallback
    ].join(','),
    fontFamilySystem: systemFont.join(','),
    fontWeightSemiBold: 600,
    fontWeightExtraBold: 800,

    h1: { fontFamily: montserrat.style.fontFamily },
    h2: { fontFamily: montserrat.style.fontFamily },
    h3: {
      color: colors.blue.dark,
      fontFamily: montserrat.style.fontFamily,
    },
    h4: { fontFamily: montserrat.style.fontFamily },
    h5: { fontFamily: montserrat.style.fontFamily },

    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.43',
      letterSpacing: '0.01071em',
    },
    button: { textTransform: 'initial' },
  },
  applyDarkStyles(css: Parameters<ApplyDarkStyles>[0]) {
    return (this as Theme).applyStyles('dark', css);
  }
} as ThemeOptions)
const materialTheme = responsiveFontSizes(theme)
const podkrepiTheme = {
  borders,
  ...materialTheme,
}

export default podkrepiTheme
