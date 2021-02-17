import React from "react";

const Table = () => {
  return (
    <>
      <table className="Ify-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="Ify-corner-topright">1</td>
            <td>CMO</td>
            <td className="Ify-corner-topright">CMO45</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>COO</td>
            <td>COO</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>CRO</td>
            <td>CRO</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>AO</td>
            <td>AO</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>AO</td>
            <td>AO</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>SAO</td>
            <td>SAO</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Test User</td>
            <td>test</td>
            <td>
              <button className="Ify-inline-btn Ify-btn-edit">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
