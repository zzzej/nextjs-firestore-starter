// TODO: Refactor this. extract to useEffect?
import React, { useState, useContext } from 'react';
import { FirebaseContext } from './provider';
import { light as t } from '../constants/themes';

const RegistrationForm = props => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { analytics, registrationsRef } = useContext(FirebaseContext);

  const handleSubmit = async e => {
    try {
      analytics.logEvent('registration_submitted');

      e.preventDefault();

      setLoading(true);

      await registrationsRef.doc(email).set({
        email,
        created_at: (new Date).getTime()
      });

      analytics.logEvent('registration_successful');

      setSuccess(true);
    } catch (e) {

      analytics.logEvent('registration_failed', e);

      setSuccess(false);
      setError(e);

      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ ...props.style }}>
      {success ? <SuccessNotification /> : (
        <>

          <div className='controls'>
            <input
              className='rounded control'
              name='email'
              value={email}
              type='email'
              placeholder='Email address'
              onChange={e => setEmail(e.target.value)}
            />
            <button className='rounded control' disabled={loading}>
              Reg&iacute;strate
            </button>
          </div>

          <p>
            Separa tu cuenta para recibir acceso temprano.
          </p>
        </>
      )}
      {error && <ErrorAlert />}
      <style jsx>{`
        .controls {
          display: flex;
          justify-content: space-between;
        }
        .control {
          padding: .5rem 1rem;
          box-shadow: ${t.shadows.boxMd};
        }

        .rounded {
          border-radius: ${t.sizes.border};
        }

        input {
          width: 100%;
          padding: ${t.sizes.md};
          margin-right: ${t.sizes.large};
          background-color: ${t.colors.grayLight};
        }

        button {
          color: ${t.colors.white};
          background-color: ${t.colors.primary};
          text-transform: uppercase;
          letter-spacing: 0.08rem;
          font-weight: 700;
          transition: .3s;
        }
        button:hover {
          background-color: ${t.colors.hoverPrimary};
        }
        p {
          margin-top: ${t.sizes.sm};
          color: ${t.colors.gray};
          font-size: ${t.sizes.sm};
        }
      `}</style>
    </form>
  )
}

const SuccessNotification = () => (
  <p>Gracias por registrarte, pronto recibir&aacute;s un correo.</p>
);

const ErrorAlert = () => (
  <p>Encontramos un error, por favor intente de nuevo.</p>
)

export default React.memo(RegistrationForm);