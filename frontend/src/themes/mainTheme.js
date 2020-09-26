/**
 * MainTheme
 *
 * Sets all the main configuration for the theming using JSS.
 */

export default {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      light: '#becbd6',
      main: '#133660',
      alternative: '#303030',
    },
    secondary: {
      main: '#f7a40a',
    },
    text: {
      light: '#ffffff',
      main: '#888887',
      lightNavy: '#133660',
      greyishBrown: '#4C4A4A',
    },
    success: {
      main: '#52c41a',
    },
    background: {
      default: '#f9fafc',
      white: '#ffffff',
      transparent: 'transparent',
    },
    border: {
      default: '#e8e8e8',
    },
    input: {
      default: '#eef1f5',
      filled: '#e2eaf4',
    },
    progress: {
      gradient: {
        '0%': '#f7a40a',
        '100%': '#87d068',
      }
    }
  },
  spacing: {
    unit: 8,
  },
  borderRadius: {
    unit: 4,
  },
  shadows: {
    card: '0 12px 23px 0 rgba(0, 0, 0, 0.07)',
  },
};
