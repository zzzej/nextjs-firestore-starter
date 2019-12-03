import React from 'react';

// TODO: Refactor if needed idc lol
const Container = props => {
  let styles = { ...props.style };

  if (props.flex || props.grid) {
    styles = { ...styles };
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
};

export default React.memo(Container);