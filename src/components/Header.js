import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <div>Sample API: <br />
        https://pokeapi.co/api/v2/pokemon<br />
        https://pokeapi.co/api/v2/pokemon/ditto<br />
        Copy one of sample api into input field, then click on Go! button to test app
      </div>
      <h1 className="header">RESTy - Lab 29</h1>
      <nav>
        <ul>
          <li>
            <Link to="/RESTy">Home</Link>
          </li>
          <li>
            <NavLink activeClassName="active" to="/RESTy/history">History</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;