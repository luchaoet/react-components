import React from 'react';
import { IfElse, MapDom } from '@luchao/react-components'

const If = IfElse.If
const Else = IfElse.Else

const Test = () => {
  return (
    <div>
      <IfElse condition={true}>
        <If>111</If>
        <Else>111</Else>
      </IfElse>
      <IfElse condition={true}>
        <If>111</If>
      </IfElse>
      <MapDom 
        dataSource={[1,2,3,4,5,6,7,8]}
        parentDom={d => <ul>{d}</ul>}
        render={(item, index) => <li key={index}>{item}</li>}
      ></MapDom>
    </div>
  );
};

export default Test;
