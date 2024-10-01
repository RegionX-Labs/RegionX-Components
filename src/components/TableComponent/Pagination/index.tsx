import React, { useState } from 'react';
import styles from './Pagination.module.scss';

interface TablePaginationProps {
    pageSize: number;
    dataLength: number;
    onPageChange: (page: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({ pageSize, dataLength, onPageChange }) => {
    const [page, setPage] = useState(1);

    const handlePageChange = (change: -1 | 1) => {
        if(page + change < 1 || page + change > Math.ceil(dataLength / pageSize)) {
            return;
        }

        const newPage = page + change;
        setPage(newPage);
        onPageChange(newPage);
    }

    return (
        <div className={styles["pagination-container"]}>
            <p>Page {page} of {Math.ceil(dataLength / pageSize)}</p>
            <p className={styles['page-navigator']} onClick={() => handlePageChange(-1)}>Prev</p>
            <p className={styles['page-navigator']} onClick={() => handlePageChange(1)}>Next</p>
        </div>
    );
};

export default TablePagination;
