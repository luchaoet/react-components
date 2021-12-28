import React from 'react';
import { Button } from '@/components'

const ButtonPage = () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={(closeLoading) => {
          setTimeout(() => {
            closeLoading()
          }, 2000);
        }}
      >Loading Button
      </Button>
    </div>
  );
};

export default ButtonPage;
