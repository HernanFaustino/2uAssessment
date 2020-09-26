export default theme => ({
  '@global': {
    body: {
      fontFamily: '"Arial", sans-serif',
    },
    main: {
      height: 1,
      '& .ant-layout-content': {
        minHeight: '100%',
        flex: '1 0 auto',
      }
    },
    '.ant-layout': {
      background: `${theme.palette.background.default} !important`,
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    }
  },
  container: {
    width: '100%',
    height: '100%',
    padding: [[40, 20]],
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
  }
});
