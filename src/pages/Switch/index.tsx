import React, { useState } from 'react';
import { Switch, } from '@/components'
import { Button } from '@alifd/next'

const SwitchPage = () => {
  const [expression, setExpression] = useState('A')
  return (
    <div>
      <Button onClick={() => setExpression('A')}>A</Button>
      <Button onClick={() => setExpression('B')}>B</Button>
      <Button onClick={() => setExpression('C')}>C</Button>
      <Button onClick={() => setExpression('D')}>D</Button>
      <Button onClick={() => setExpression('E')}>E</Button>

      <Switch expression={expression}>
        <div case="A">A1</div>
        <div case="A">A2</div>
        <div case="B">B</div>
        <div case="B">B</div>
        <Button case="E">Button</Button>
        <div case="C">C</div>
        <div default>default1</div>
        <div default>default2</div>
      </Switch>
    </div>
  );
};

export default SwitchPage;
