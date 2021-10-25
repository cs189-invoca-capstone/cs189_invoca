
import React from 'react';
import { useTable, useBlockLayout  } from 'react-table';
import { useCssUnit } from 'react-table-css-unit';

import "./Dashboard.css";
import styled from 'styled-components';


export default function Dashboard() {

    const Styles = styled.div`
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        
        flex-direction: column;
        table {
            border-spacing: 0;
            border: 1px solid black;
            text-align: center;
            display: 'flex';
            flex-direction: column;
            align-items: center;
            justify-content: center;
            tr {
                :last-child {
                    td {
                    border-bottom: 0;
                    }
                }
            }
            th,
            td {
                margin: 0;
                padding: 0.5rem;
                border-bottom: 1px solid black;
                border-right: 1px solid black;

                :last-child {
                    border-right: 0;
                }
            }
        }
    `

    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      )
      const columns = React.useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
          {
            Header: 'Column 3',
            accessor: 'col3',
          },
          {
            Header: 'Column 4',
            accessor: 'col4',
          },
        ],
        []
      )

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data },
        useBlockLayout,
        useCssUnit)

    return (
        <div className="wrapper">
            <Styles>
                <table {...getTableProps()}>
                    <thead>
                    {
                        // Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr
                                {...headerGroup.getHeaderGroupProps()}>
                                {/* // Loop over the headers in each row */}
                                {
                                    headerGroup.headers.map(column => {
                                    // Apply the header cell props
                                    return (
                                        <th {...column.getHeaderProps()}>
                                        {/* // Render the header */}
                                        {column.render('Header')}
                                        </th>
                                    )
                                    })
                                }
                    
                            </tr>
                        ))
                    }
                    </thead>
                    {/* Apply the table body props */}
                    <tbody {...getTableBodyProps()}>
                        {
                        // Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                row.cells.map(cell => {
                                    // Apply the cell props
                                    return (
                                    // Render the cell contents
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                    )
                                })
                                }
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </Styles>
        </div>
    )
}
