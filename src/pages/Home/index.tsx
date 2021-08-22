import React from 'react';
import Scroll from '@/components/Scroll';
import {IfElse,MapDom} from '@/components'

import './index.scss'

const If = IfElse.If
const Else = IfElse.Else

const Home = () => {
  return (
    <div className="home-wrap">
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

      <div className="container">
        <Scroll>
          <MapDom 
            dataSource={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            parentDom={d => <ul style={{
              display: 'flex'
            }}>{d}</ul>}
            render={(item, index) => <li style={{width: 100}} key={index}>{item}</li>}
          ></MapDom>
          
        </Scroll>
      </div>
    </div>
  );
};

export default Home;
