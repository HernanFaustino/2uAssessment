/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Result } from 'antd';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="Lo sentimos, esta página no está disponible."
      subTitle="Es posible que el enlace que seguiste esté roto o se haya eliminado la página."
    />
  )
}
