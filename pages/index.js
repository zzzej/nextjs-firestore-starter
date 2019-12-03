import React from 'react';
import Hero from '../components/hero';
import Details from '../components/details';
import PicturesCard from '../components/pictures-card';

const Home = () => (
  <div id='home' className='container'>
    <Hero />

    <PicturesCard />

    <Details />

    <style jsx>{`
      #home {
        margin-top: 10rem;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 3fr 1fr 3fr 3fr;
        grid-template-columns: 1fr;
        grid-gap: .5rem;
        grid-template-areas:
            'welcome'
            'form'
            'pictures'
            'details'
            'details-illustration';
          }
      }

      @media screen and (min-width: 800px) {
        #home {
          grid-template-columns: 4fr 3fr;
          grid-template-rows: 1fr 1fr 3fr 3fr;
          grid-template-areas:
            'welcome illustrations'
            'form illustrations'
            'pictures pictures'
            'details details-illustration';
          }
        }
      }
    `}</style>
  </div>
);

export default Home;
