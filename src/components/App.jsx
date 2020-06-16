import React from 'react';
import { Route } from 'react-router-dom';

import Form from './Form.js';
import Results from './Results.jsx';
import Header from './Header.js';
import History from './History.jsx';
import { If, Then, Else } from './Condition.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
      count: 0,
      body: {},
      headers: {},
      history: [],
      loading: false,
    };
  }

  // add some functions
  handleChange = (e) => {
    const url = e.target.value;
    this.setState({ url });
  };

  handleClick = (e) => {
    const method = e.target.value;
    this.setState({ method });
  };

  handleGo = (e) => {
    const { history, url, loading } = this.state;
    this.setState({
      loading: !loading,
      history: [...history, url].reverse(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: this.state.method,
      url: this.state.url,
    })
      .then((response) => {
        this.setState({
          error: '',
          count: response.data.count,
          headers: { Headers: response.headers },
          body: { Data: response.data },
          loading: false,
          url: '',
        });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: error, url: '', loading: false });
      });
  };

  render() {
    const { url, count, headers, body, history, loading } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/RESTy">
          <Form
            url={url}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleGo={this.handleGo}
          />
          <If condition={!loading}>
            <Then>
              <If condition={Object.keys(body).length !== 0}>
                <Then>
                  <Results count={count} headers={headers} body={body} />
                </Then>
              </If>
            </Then>
            <Else>
              <img
                src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
                alt="loading"
                width="300px"
                height="300px"
              />
            </Else>
          </If>
        </Route>
        <Route exact path="/RESTy/history">
          <History history={history} />
        </Route>
      </React.Fragment>
    );
  }
}

export default App;
