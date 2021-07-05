import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

const Main = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));