import React from 'react';
import ReactJson from 'react-json-view';

const Results = ({ count, body, headers }) => {
  return (
    <div>
      <ReactJson name={false} src={{ Count: count }} />
      <ReactJson name={false} src={headers} />
      <ReactJson name={false} src={body} />
    </div>
  );
};

export default Results;
