/**
 * Asynchronously loads the component for LoginPage
 */
import React from 'react';
import loadable from '@loadable/component';

import LoadingIndicator from '../../components/LoadingIndicator';

const Loadable = loadable(() => import('./index'), {
  fallback: <LoadingIndicator />
});

export default Loadable;