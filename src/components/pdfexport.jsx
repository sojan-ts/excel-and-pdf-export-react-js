import React from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default function Pdfexport() {
    const doc = new jsPDF()

    autoTable(doc, { html: '#my-table' ,},  )
  
    function exportdata() {
      doc.save('table.pdf')
    }
  
  return (
   
   <>
   
   <button onClick={exportdata}>export</button>
<table id="my-table">
<tr>
    <th colspan="3">Sum: $180</th>
  </tr>
  <tr>
    <td>Head 1</td>
    <td>Head 2</td>
    <td>Head 3</td>

  </tr>
  <tr>
  
  <td>Montd</td>
    <td>Savings</td>
    <td>Montd</td>
  </tr>
  <tr>
    
  <td>Montd</td>
    <td>Savings</td>
    <td>Montd</td>
  </tr>
  <tr>
    <th colspan="3">Sum: $180</th>
  </tr>
    <tr>
   
    <td>Montd</td>
    <td>Savings</td>
    <td>Montd</td>
  </tr>
    <tr>
    
    <td>Montd</td>
    <td>Savings</td>
    <td>Montd</td>
  </tr>
</table>
   </>
  )
}
