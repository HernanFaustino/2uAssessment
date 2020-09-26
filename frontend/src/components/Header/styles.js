export default theme => ({
  header: {
    padding: 0,
    '&.ant-layout-header': {
      transition: 'background-color .6s ease-in',
    }
  },
  headerContent: {
    height: 100,
    width: '100%',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  logo: {
    height: 75,
  },
  menuItem: {
    '&.ant-menu-item': {
      color: 'white !important',
    },
  },
  menuItemUser: {
    cursor: 'default',
    '@media (max-width: 768px)': {
      display: 'none !important',
    }
  },
});