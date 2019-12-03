# Next.js Firestore starter
  1. Rename <code>.firebase-config</code> to <code>firebase-config.js</code>
  2. Create a firestore collection called <code>registrations</code> if you wanna use the email registration form
  3.Now you have access to firestore context like so:
  ```js
  import React, { useContext } from 'react';
  import { FirebaseContext } from './provider';

  const Registrations = () => {
    const { analytics, registrationsRef } = useContext(FirebaseContext);

    return <p>...</p>
  };
  ```

  The FirebaseProvider
  ```js
    {
      perf: firebase.performance(),
      analytics: firebase.analytics(),
      registrationsRef: firebase.firestore().collection('registrations')
    }
  ```

# Layout
* Uses CSS Grid for layout and minimal html
* No external css. All styles in Next.js' supported CSS-in-JS library styled-jsx

# TODO
  * Update docs
  * Remove css normalization
  * finish design