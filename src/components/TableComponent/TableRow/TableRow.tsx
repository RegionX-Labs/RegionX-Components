import React from 'react';
import './TableRow.scss';
import Identicon from '@polkadot/react-identicon';
import { TableData } from '../../../types/types';

interface TableRowProps {
  data: Record<string, any>;
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <div className="tableRow">
      {Object.keys(data).map((key, index) => (
        // TODO: If link primaryGreenCell otherwise use the dark color as in design.
        <div key={index} className={`tableRow-cell primaryGreenCell`}>
          <Cell cell={data[key]} />
        </div>
      ))}
    </div>
  );
};

const Cell = ({cell}: {cell: TableData} ) => {
  const formatAccountString = (account: string): string => {
    if (account.length <= 19) return account;
    const firstPart = account.slice(0, 6);
    const lastPart = account.slice(-4);
    return `${firstPart}...${lastPart}`;
  };

  switch (cell.cellType) {
    case 'text':
      return (
        <p>{cell.data}</p>
      );
    case 'link':
      return (
        <a href={cell.link}>{cell.data}</a>
      );
    case 'address': 
      return (
        <>
          <span className='accountCell-icons'>
            <Identicon value={cell.data} size={20} className="identicon"/>
          </span>
          <a href={cell.link}>{formatAccountString(cell.data)}</a>
        </>
      )
  }
}

export default TableRow;
