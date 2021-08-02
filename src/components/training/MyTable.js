import React from 'react';
import { useTable } from 'react-table';
import axios from 'axios';

// let data = []; 
// axios.get(`http://localhost:8084/Employee`)
//     .then( res => {
//           data = res;
//     });


const data = [
    { name: 'Sonu', salary: 10.5 },
    { name: 'Monu', salary: 10.6 },
    { name: 'Tonu', salary: 10.7 },
    { name: 'Ponu', salary: 10.8 }
];
const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Salary', accessor: 'salary' }
];
const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });
    return (
        <table {...getTableProps()} className="table table-dark table-striped table-hover">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
const MyTable = () => {
    return (
        <div className="App">
            <h1>My Table</h1>
            <p >
                <Table data={data} columns={columns} />
            </p>
        </div>)
}
export default MyTable;