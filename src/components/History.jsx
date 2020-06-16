import React from 'react';
import { Link } from 'react-router-dom';

const History = ({ history }) => {
  return (
    <div>
      {history.map((url, index) => {
        return (
          <li key={index}>
            {url}
            <Link to="/RESTy">
              <button>Go!</button>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default History;
