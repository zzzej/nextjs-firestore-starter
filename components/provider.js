import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/performance';
import firebaseConfig from '../constants/firebase-config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext = createContext();

export const FirebaseProvider = props => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      perf: firebase.performance(),
      analytics: firebase.analytics(),
      registrationsRef: firebase.firestore().collection('registrations')
    });
  }, [])

  return (
    <FirebaseContext.Provider value={state}>
      {props.children}
    </FirebaseContext.Provider>
  )
}