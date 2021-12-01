import React from 'react';
import { IfElse, MapDom } from '@luchao/react-components'
import Test2 from '../Test2'

const Test = () => {
  return (
    <div>
      <IfElse condition={'11'}>
        <IfElse.If>111</IfElse.If>
        <IfElse.Else>222</IfElse.Else>
      </IfElse>
      <IfElse condition>
        <IfElse.If>111</IfElse.If>
      </IfElse>
      <MapDom
        dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        parentDom={(d) => <ul>{d}</ul>}
        render={(item, index) => <li key={index}>{item}</li>}
      />
      <Test2 />

      <hr />
    </div>
  );
};

export default Test;
