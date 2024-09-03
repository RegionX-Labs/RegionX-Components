import React, { useState } from 'react';
import './TableComponent.scss';
import { TableRow } from './index';
import SearchIcon from '../../assets/icons/Search.svg';
import { TableProps } from '../../types/types';

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>(
    Object.keys(data[0] || {}).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {} as Record<string, string>)
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, column: string) => {
    const newSearchTerms = { ...searchTerms, [column]: e.target.value };
    setSearchTerms(newSearchTerms);
    filterData(newSearchTerms);
  };

  const filterData = (searchTerms: Record<string, string>) => {
    const filtered = data.filter(row =>
      Object.keys(searchTerms).every(
        key => String(row[key]).toLowerCase().includes(searchTerms[key].toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div className="tableWrapper">
      <div className="tableHeader">
        {Object.keys(data[0] || {}).map((key, index) => (
          <div key={index} className={`tableHeader-cell ${data[0][key]?.cellType}`}>
            <p>{key}</p>
            <input
              type="text"
              value={searchTerms[key]}
              onChange={(e) => handleSearchChange(e, key)}
            />
            <img src={SearchIcon} alt="Search" className="searchIcon" />
          </div>
        ))}
      </div>
      <div className="tableBody">
        {filteredData.length === 0 ? (
          <div className="noResultsMessage">No results found.</div>
        ) : (
          filteredData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              data={row}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TableComponent;
