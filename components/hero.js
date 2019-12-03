import React from 'react'
import { light as t } from '../constants/themes';
import RegistrationForm from '../components/registration-form';
import Slides from '../components/slides';

const Hero = () => {

  return (
    <>
      <section id="welcome" style={{ gridArea: 'welcome' }}>
        <h1>
          Welcome to Next.js!
      </h1>
        <article>
          <p>
            To get started, edit *pages/index.js* and save to reload.
        </p>
          <a href="#docs">Browse Docs</a>
        </article>
      </section>


      <RegistrationForm style={{ gridArea: 'form' }} />


      <Slides className='home-slides' style={{ gridArea: 'illustrations' }}>
        <img src="illustrations/phone-map-pin.svg" alt="" />
        <img src="illustrations/map-pins.svg" alt="" />
      </Slides>

      <style jsx>{`
      h1 {
        line-height: 1;
        font-size: ${t.sizes.biggest};
        display: block;
      }
      #welcome {
        display: flex;
        flex-direction: column;
      }
      #welcome > * {
        margin: auto 0px;
      }

    `}</style>
    </>
  );
}

export default React.memo(Hero);