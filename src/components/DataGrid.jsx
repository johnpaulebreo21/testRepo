
import { React, useState } from 'react';

const DataGrid = (props) => {
   const [data, setData] = useState(props.Data);

   const handleDoubleClick = (event) => { 
      console.log(event.target.getAttribute("keyzzz"))

   }

   const TableHeaderz = () => {
      let x = data[Object.keys(data)[1]];
      return (
         <thead>
            <tr>
               {
                  Object.keys(x).map((names, keys) => {
                     if (names != "id") {
                        return <th key={keys}>{names}</th>
                     }
                  })

               }
            </tr>
         </thead>
      )
   }

   const TableDetailz = () => {
      let id = "";
      return (
         <tbody>
            {data.map((values) => { 
               id = values[Object.keys(values)[0]];  
               return <tr >
                  {Object.values(values).map((valuez, keyz) => {
                     if (keyz != "0") {  
                        console.log(id)
                        return <td keyzzz={id}  onDoubleClick={handleDoubleClick}>{valuez}</td>
                        
                     }
                  })
                  }
               </tr>
            })
            }

         </tbody>

      )

   }



   return (
      <div>
         <table>
            <TableHeaderz />
            <TableDetailz />
         </table>
      </div>
   )
}
export default DataGrid;