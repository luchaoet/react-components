import React from 'react';

interface MapDomProps {
  parentDom: Function;
  dataSource: any[];
  render: Function;
}

function MapDom({ parentDom = (c) => <>{c}</>, dataSource = [], render = () => null }: MapDomProps) {
  const c = dataSource.map((item, index: number) => render(item, index));
  return parentDom(c);
}

export default MapDom;
