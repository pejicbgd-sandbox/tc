import React, { Component } from 'react';
import { render } from 'react-dom';

import Page from 'components/Page';

require('./scss/raw.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Page />
        </div>
      </div>
      );
  }
}

render(
  <App />,
  document.getElementById('app')
);