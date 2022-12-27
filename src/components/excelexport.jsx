import React, {useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';


export default function Excelexport() {
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })
  return (
   <>
      <div>
                <button onClick={onDownload}> Export excel </button>

                 <table  ref={tableRef}>
                  <tbody>
                    <tr>
                        <th  colspan="3">Kollam</th>
                        
                    </tr>
                    <tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Rollno</th>
                        
                    </tr>
                    <tr>
                        <td>Edison</td>
                        <td>Padilla</td>
                        <td>20</td>
                    </tr>
                    <tr>
    <th colspan="3">Kottayam</th>
  </tr>
  <tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Rollno</th>
                        
                    </tr>
                    <tr>
                        <td>Alberto</td>
                        <td>Lopez</td>
                        <td>94</td>
                    </tr>
                  </tbody>
                </table>

            </div>
   </>
  )
}
