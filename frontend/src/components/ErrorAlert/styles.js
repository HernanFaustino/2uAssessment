export default theme => ({
  errorAlert: {
    '&.ant-alert-error': {
      marginTop: theme.spacing.unit * 2,
    },
    '& .ant-alert-message': {
      color: 'red',
    }
  }
});
