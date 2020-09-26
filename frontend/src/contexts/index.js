import React from 'react';
import { SessionProvider } from './session';
import { ThemeProvider } from './theme';
import { InvoiceProvider } from './invoice';


function AppStoreProvider({ children }) {
  return (
    <SessionProvider>
        <InvoiceProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </InvoiceProvider>
    </SessionProvider>
  );
}

export default AppStoreProvider;
