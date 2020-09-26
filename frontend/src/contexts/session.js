import React, { useState, useContext } from 'react';

const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {
  const [sessionState, setSessionState] = useState({
    userTag: '',
    userType: '',
    userInfo: {},
  });

  return (
    <SessionContext.Provider value={{ sessionState, setSessionState }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider };
