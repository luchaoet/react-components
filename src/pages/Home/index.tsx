import React, { useState } from 'react';
// import Scroll from '@/components/Scroll';
import {IfElse,MapDom, DraggleLayout, Switch, Excel } from '@/components'
import { Button } from '@alifd/next'

import './index.scss'

const If = IfElse.If
const Else = IfElse.Else

const Home = () => {
  const [expression, setExpression] = useState('A')
  return (
    <div className="home-wrap">
      <IfElse condition={true}>
        <If>111</If>
        <Else>222</Else>
      </IfElse>
      <IfElse condition={true}>
        <If>111</If>
      </IfElse>
      <MapDom 
        dataSource={[1,2,3,4,5,6,7,8]}
        parentDom={d => <ul>{d}</ul>}
        render={(item, index) => <li key={index}>{item}</li>}
      ></MapDom>
      <div style={{ height: 200, border: '1px solid #333'}}>
        <DraggleLayout min='10%' max='80%' defaultValue="50%" direction='ver' style={{width: '100%', height: '100%'}}>
          <DraggleLayout.A style={{backgroundColor: '#4caf50'}}>A</DraggleLayout.A>
          <DraggleLayout.B style={{backgroundColor: '#009688'}}>B</DraggleLayout.B>
        </DraggleLayout>
      </div>
      <div style={{ height: 200, border: '1px solid #333'}} className='g-w-100per'>
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

      <div  style={expression === 'A' ? {width: '100%', height: 400} : {width: '50%',height: 300}}>
        <Excel />
      </div>

      <div style={{height: 300}}></div>

    </div>
  );
};

export default Home;
