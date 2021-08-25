import React, { useState } from 'react';
// import Scroll from '@/components/Scroll';
import {IfElse,MapDom, DraggleLayout, Scroll, Switch } from '@/components'
import { Button } from '@alifd/next'

import './index.scss'

const If = IfElse.If
const Else = IfElse.Else

const Home = () => {
  const [expression, setExpression] = useState('A')
  return (
    <div className="home-wrap">
      <IfElse condition={undefined}>
        <If>111</If>
        <Else>2222</Else>
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
      <div style={{ height: 200, border: '1px solid #333'}}>
        <DraggleLayout min='10%' max='80%' defaultValue="50%" direction='ver' style={{width: '100%', height: '100%'}}>
          <DraggleLayout.A style={{backgroundColor: '#4caf50'}}>A</DraggleLayout.A>
          <DraggleLayout.B style={{backgroundColor: '#009688'}}>B</DraggleLayout.B>
        </DraggleLayout>
      </div>
      <div style={{ height: 200, border: '1px solid #333'}}>
        <DraggleLayout min='10%' max='80%' defaultValue="50%" direction='hoz' style={{width: '100%', height: '100%'}}>
          <DraggleLayout.A style={{backgroundColor: '#4caf50'}}>A</DraggleLayout.A>
          <DraggleLayout.B style={{backgroundColor: '#009688'}}>B</DraggleLayout.B>
        </DraggleLayout>
      </div>

      <div>
        <Button onClick={() => setExpression('A')}>A</Button>
        <Button onClick={() => setExpression('B')}>B</Button>
        <Button onClick={() => setExpression('C')}>C</Button>
      </div>
      <Switch expression={expression}>
        <div case='A'>A</div>
        <div case='B'>B</div>
        <div case='C'>C</div>
      </Switch>


      <div style={{height: '50vh'}}></div>
    </div>
  );
};

export default Home;
