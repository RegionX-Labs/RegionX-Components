import React from 'react';
import './TableRow.scss';
import Cell from '../Cell/Cell';

interface TableRowProps {
  data: Record<string, any>;
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <div className="tableRow">
      {Object.keys(data).map((key, index) => (
        <div key={index} className={`tableRow-cell`}>
          <Cell cell={data[key]} />
        </div>
      ))}
    </div>
  );
};

export default TableRow;
