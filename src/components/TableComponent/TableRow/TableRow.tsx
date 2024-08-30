import React, { useState } from 'react';
import './TableRow.scss';
// import CheckIcon from '../../../../src/assets/icons/Check.svg';
import Identicon from '@polkadot/react-identicon';

interface TableRowProps {
  data: {
    ExstricID: string;
    Account: string;
    Core: number;
    "Price(KSM)": number;
    SalesType: string;
    Timestamp: string;
  };
  onSelectRow?: (selected: boolean) => void; // Callback for row selection
}

const TableRow: React.FC<TableRowProps> = ({ data, onSelectRow }) => {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isChecked = e.target.checked;
//     setIsSelected(isChecked);
//     if (onSelectRow) {
//       onSelectRow(isChecked);
//     }
//   };

  function formatAccountString(account: string): string {
    if (account.length <= 19) {
      return account;
    }
    const firstPart = account.slice(0, 15);
    const lastPart = account.slice(-4);
    return `${firstPart}...${lastPart}`;
  }

  return (
    <div className='tableRow'>
    {/* <div className={`tableRow ${isSelected ? 'tableRow-selected' : ''}`}> */}
      {/* <div className="tableRow-cell checkboxCell">
      <input
          type="checkbox"
          id={`checkbox-${data.ExstricID}`}
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={`checkbox-${data.ExstricID}`}></label>
      </div> */}
      <div className="tableRow-cell exstricIdCell">{data.ExstricID}</div>
      <div className="tableRow-cell accountCell">
        <span className='accountCell-icons'>
            <Identicon value={data.Account} size={20} className="identicon"/>
        </span>
        {formatAccountString(data.Account)}
        </div>
      <div className="tableRow-cell">{data.Core}</div>
      <div className="tableRow-cell">{data["Price(KSM)"]}</div>
      <div className="tableRow-cell">{data.SalesType}</div>
      <div className="tableRow-cell">{data.Timestamp}</div>
    </div>
  );
};

export default TableRow;
