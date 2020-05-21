import React from 'react';
import Form from './Form.js';
import Results from './Results.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
      count: 0,
      body: {},
      headers: {}
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
      .then(response => {
        this.setState({
          count: response.data.count,
          headers: { "Headers": response.headers },
          body: { "Data": response.data }
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { url, count, headers, body } = this.state;
    return (
      <React.Fragment>
        <Form url={url} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} />
        <Results count={count} headers={headers} body={body} />
      </React.Fragment>
    )
  }
}

export default App;