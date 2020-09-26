export default theme => ({
  footer: {
    background: theme.palette.background.transparent,
    borderTop: `1px solid ${theme.palette.primary.light}`,
    padding: [[14, 0]],
  },
  footerLogo: {
    height: 50,
    filter: `opacity(0.5) drop-shadow(0 0 0 ${theme.palette.primary.main})`,
  },
  footerText: {
    color: theme.palette.primary.light,
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 576px)': {
      maxWidth: 540,
    },
    '@media (min-width: 768px)': {
      maxWidth: 720,
    },
    '@media (min-width: 992px)': {
      maxWidth: 960,
    },
    '@media (min-width: 1200px)': {
      maxWidth: 1280,
    },
  },
});