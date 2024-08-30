import React, { useState } from 'react';
import './TableComponent.scss';
import { TableRow } from './index';
import { SearchTerms } from '../../types/types';
import SearchIcon from '../../assets/icons/Search.svg';

interface TableProps {
  data: Array<{
    ExstricID: string;
    Account: string;
    Core: number;
    "Price(KSM)": number;
    SalesType: string;
    Timestamp: string;
  }>;
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
//   const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchTerms, setSearchTerms] = useState({
    ExstricID: '',
    Account: '',
    Core: '',
    "Price(KSM)": '',
    SalesType: '',
    Timestamp: ''
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, column: keyof typeof searchTerms) => {
    const newSearchTerms = { ...searchTerms, [column]: e.target.value };
    setSearchTerms(newSearchTerms);
    filterData(newSearchTerms);
  };

  const filterData = (searchTerms: SearchTerms) => {
    const filtered = data.filter(row =>
      Object.keys(searchTerms).every(
        key => String(row[key as keyof typeof row]).toLowerCase().includes(searchTerms[key as keyof typeof searchTerms].toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

//   const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       setSelectedRows(filteredData.map(row => row.ExstricID));
//     } else {
//       setSelectedRows([]);
//     }
//   };

//   const handleRowSelect = (isSelected: boolean, id: string) => {
//     if (isSelected) {
//       setSelectedRows([...selectedRows, id]);
//     } else {
//       setSelectedRows(selectedRows.filter(rowId => rowId !== id));
//     }
//   };

  return (
    <div className="tableWrapper">
      <div className="tableHeader">
        {/* <div className="tableHeader-cell checkboxCell">
        <input
            type="checkbox"
            id="selectAll"
            onChange={handleSelectAll}
            checked={selectedRows.length === filteredData.length && filteredData.length > 0}
        />
        <label htmlFor="selectAll"></label>
        </div> */}
        <div className="tableHeader-cell exstricIdCell">
            <p>Exstric ID</p>
            <input
            type="text"
            onChange={(e) => handleSearchChange(e, 'ExstricID')}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
        </div>
        <div className="tableHeader-cell accountCell">
            <p>Account</p>
            <input
                type="text"
                onChange={(e) => handleSearchChange(e, 'Account')}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
        </div>
        <div className="tableHeader-cell">
            <p>Core</p>
            <input
            type="text"
            onChange={(e) => handleSearchChange(e, 'Core')}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
        </div>
        <div className="tableHeader-cell">
            <p>Price(KSM)</p>
            <input
            type="text"
            value={searchTerms["Price(KSM)"]}
            onChange={(e) => handleSearchChange(e, 'Price(KSM)')}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
        </div>
        <div className="tableHeader-cell">
            <p>Sales Type</p>
            <input
            type="text"
            value={searchTerms.SalesType}
            onChange={(e) => handleSearchChange(e, 'SalesType')}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
        </div>
        <div className="tableHeader-cell">
            <p>Time Stamp</p>
            <input
            type="text"
            value={searchTerms.Timestamp}
            onChange={(e) => handleSearchChange(e, 'Timestamp')}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
        </div>
      </div>
      <div className="tableBody">
        {filteredData.length === 0 ? (
            <div className="noResultsMessage">No results found.</div>
        ) : (
            filteredData.map(row => (
            <TableRow
                key={row.ExstricID}
                data={row}
                // onSelectRow={(isSelected) => handleRowSelect(isSelected, row.ExstricID)}
            />
            ))
        )}
      </div>
    </div>
  );
};

export default TableComponent;
