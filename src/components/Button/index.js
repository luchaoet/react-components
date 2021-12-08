import React, { useState } from 'react';
import { Button } from '@alifd/next';
import { empty } from '@luchao/base-utils';

function ButtonCom({onClick = empty, ...others}) {
  const [loading, setLoading] = useState(false);

  function closeLoading() {
    setLoading(false);
  }

  function handleClick() {
    setLoading(true);
    onClick(closeLoading);
  }
  return (
    <Button {...others} loading={loading} onClick={handleClick} />
  )
}
export default ButtonCom;