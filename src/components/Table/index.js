import React, { } from 'react';
import cx from 'classnames'
import './index.scss';

function Table({dataSource = [], loading = false, style, className, children }) {
  return (

    <table cellSpacing="0" style={style} className={cx('table-wrapper', className)}>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead className="table-head-wrapper">
        <tr>
          <th>
            <div className="table-cell-wrapper">January</div>
          </th>
          <th>
            <div className="table-cell-wrapper">January</div>
          </th>
        </tr>
      </thead>

      <tbody className="table-body-wrapper">
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
          <td>
            <div className="table-cell-wrapper">January</div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
function Column({title, dataIndex}) {
  return 11
}

Table.Column = Column;

export default Table;