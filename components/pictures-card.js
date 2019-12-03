import React from 'react';
import pictures from '../constants/pictures';
import Slides from './slides';
import { light as t } from '../constants/themes';

const PicturesCard = () => (
  <>
    <div>
      {pictures.map(p => (
        <CardSlide key={p.id} {...p} />
      ))}
    </div>
    <style jsx>{`
      div {
        overflow: scroll;
        width: 100%;
        grid-area: pictures;
        display: flex;
        gap: 1rem;
        margin-top: 5rem;
      }
    `}</style>
  </>
);

const CardSlide = p => (
  <div>
    <img src={p.url} alt={p.caption} />
    <p>{p.owner}</p>
    <p className='caption'>"{p.caption}" {p.username}</p>
    <style jsx>{`
      div {
        margin: 0 auto;
      }
      p {
        font-weight: 700;
        font-size: .75rem;
      }
      .caption {
        color: ${t.colors.gray};
      }
      img {
        flex: none;
        border-radius: .25rem;
        overflow: hidden;
        display: block;
        text-align: center;
        background-size: cover;
        box-shadow: ${t.shadows.boxMd}
      }
    `}</style>
  </div>
)

export default React.memo(PicturesCard);