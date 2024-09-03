import React from 'react';
import './TableRow.scss';
import Identicon from '@polkadot/react-identicon';

interface TableRowProps {
  data: Record<string, any>;
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  const formatAccountString = (account: string): string => {
    if (account.length <= 19) return account;
    const firstPart = account.slice(0, 15);
    const lastPart = account.slice(-4);
    return `${firstPart}...${lastPart}`;
  };

  return (
    <div className="tableRow">
      {Object.keys(data).map((key, index) => (
        <div key={index} className={`tableRow-cell ${data[key]?.cellType}`}>
          {data[key]?.cellType === 'IdenticonCell' ? (
            <>
              <span className='accountCell-icons'>
                <Identicon value={data[key].data} size={20} className="identicon"/>
              </span>
              <a href={data[key].link}>{formatAccountString(data[key].data)}</a>
            </>
          ) : (
            data[key]?.data || data[key]
          )}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
