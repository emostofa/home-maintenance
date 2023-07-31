import React from "react";

export default function UserTable() {
  const handleDetails = () => {
    window.my_modal_2.showModal();
  };
  return (
    <>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>
      
<button className="btn btn-sm" onClick={()=>window.my_modal_2.showModal()}>Click here for more Details</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
  <p>TODO</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </td>
      </tr>
    </>
  );
}
