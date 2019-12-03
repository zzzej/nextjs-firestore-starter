import React, { createContext, useState, useEffect } from 'react';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext = createContext();

export const FirebaseProvider = props => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      perf: {},
      analytics: {},
      registrationsRef: {}
    });
  }, [])

  return (
    <FirebaseContext.Provider value={state}>
      {props.children}
    </FirebaseContext.Provider>
  )
}