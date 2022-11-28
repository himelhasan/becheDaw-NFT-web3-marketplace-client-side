import React from "react";

const Orders = ({ person }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr class="odd:bg-white even:bg-slate-50">
            <td>{person.name}</td>
            <td>{person.title}</td>
            <td>{person.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
