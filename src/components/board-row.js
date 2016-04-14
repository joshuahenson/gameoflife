import React, { PropTypes } from 'react';

let key = 0;
const BoardRow = ({ row }) => (
  <div className="row">
    {row.map(cell =>
      <div key={key++} className={cell ? 'alive' : 'dead'} />
    )}
  </div>
);

BoardRow.propTypes = { row: PropTypes.array.isRequired };

export default BoardRow;
