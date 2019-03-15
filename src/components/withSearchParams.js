import React from 'react';

const withSearchParams = Component => {
  return props => {
    const {
      location: { search }
    } = props;
    const params = new URLSearchParams(search);

    return <Component {...props} params={params} />;
  };
};

export default withSearchParams;
