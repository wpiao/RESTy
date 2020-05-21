import React from 'react';
import Form from './Form.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
      count: 0,
      results: []
    };
  }

  // add some functions
  handleChange = e => {
    const url = e.target.value;
    this.setState({ url });
  }

  handleClick = e => {
    e.preventDefault();
    const method = e.target.value;
    this.setState({ method });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios({
      method: this.state.method,
      url: this.state.url
    })
      .then(response => console.log(response))
  }

  render() {
    const { url } = this.state;
    return (
      <React.Fragment>
        <Form url={url} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} />
      </React.Fragment>
    )
  }
}

export default App;