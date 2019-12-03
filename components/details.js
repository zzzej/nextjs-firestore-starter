import React from 'react'

const Details = () => (
  <>
    <div id='details' style={{ gridArea: 'details' }}>
      detalles
    </div>
    <div id='details-illustration' style={{ gridArea: 'details-illustration' }}>
      ILLUSTRATION
    </div>
    {/* <style jsx>{` #details { display: flex;} `}</style> */}
  </>
);

export default React.memo(Details);