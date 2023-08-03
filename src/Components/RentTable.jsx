import React from "react";

export default function RentTable(props) {
    let {name, cost, index} = props;
    
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name of Expense</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>{index}</th>
            <td>{name}</td>
            <td>{cost}</td>
          </tr>
          
        </tbody>
        
      </table>
    </div>
  );
}
