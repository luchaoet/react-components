import React from 'react';
import { Table } from '@/components'

const { Column } = Table;

const TablePage = () => {
  return (
    <Table style={{ margin: '20px auto', width: '80%' }}>
      <Column title="1" dataIndex="id" />
      <Column title="2" dataIndex="name" />
      <Column title="3" dataIndex="sex" />
    </Table>
  );
};

export default TablePage;
