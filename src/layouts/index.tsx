import React from 'react';

const BasicLayout: React.FC = props => {
  return (
    <div style={{ fontFamily: 'Georgia, sans-serif' }}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
