import React from 'react';

const Detail = ({ match }) => {
  const {
    params: { id }
  } = match;

  return <div>Película {id}</div>;
};

export default Detail;
