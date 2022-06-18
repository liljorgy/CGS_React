import React from 'react';
import '../../App.css';

const CompsTable = (props) => {
    const comps = props.comp;
    return (
      <table key={comps._id}>
          <tbody>
          <tr>
              <td>{comps.location.street}</td>
              <td>{comps.location.city}</td>
              <td>{comps.location.county}</td>
              <td>{comps.location.state}</td>
          </tr>
          </tbody>
      </table>
    );
};

export default CompsTable;