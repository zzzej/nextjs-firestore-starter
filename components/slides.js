import React from 'react';

const Slides = props => (
  <div className={`slides ${props.className}`} style={{ ...props.style }}>
    {props.children}
    <style jsx>{`
      .slides {
        display: flex;
        overflow-x: auto;
        scroll-snap-stop: always;
        scroll-snap-type: x mandatory;
        overscroll-behavior-x: contain;
        width: 100%;
      }
      .slides > :global(*) {
        margin-right: 1.25rem;
        scroll-snap-align: start;
      }

      @media screen and (min-width: 0px) and (max-width: 799px) {
        .slides {
          display: ${props.className ? 'none' : 'flex'};
        }
      }
    `}</style>
  </div>
);

export default React.memo(Slides);