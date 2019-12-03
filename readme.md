# Next.js Firestore starter
1. Rename <code>.firebase-config</code> to <code>firebase-config.js</code>
2. Create a firestore collection called <code>registrations</code> if you wanna use the email registration form
3.Now you have access to firestore context:
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

  This is intended to accelerate my development process by having a base layout with grid and firestore already in place.
  I figure it may help someone else. 👨‍💻