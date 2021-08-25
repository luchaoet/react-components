import React from 'react';

function MapDom({ parentDom = (c) => <>{c}</>, dataSource = [], render = () => null }) {
  const c = dataSource.map((item, index) => render(item, index));
  return parentDom(c);
}

export default MapDom;
