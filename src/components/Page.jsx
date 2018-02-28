import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Pane from 'components/Pane';

import Network from 'helpers/Network';

class Page extends Component {

  constructor(props) {
    super(props);
    this._n = new Network();
    this.state = {
      selected: this.tabs.users,
      items: [],
      headers: [],
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData(tab, e) {
    e && e.preventDefault();
    this._n.fetchEntries(this.state.selected).then(items => {
      this.setState({
        items,
        selected: tab || 'users',
        headers: [...Object.keys(items[0])]
      });
    });
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs__labels">
          { Object.values(this.tabs).map((tab, i) => {
            return (
              <li key={ i }>
                <a href="#"
                  className={ this.state.selected === i ? 'active' : '' }
                  onClick={ this.selectTab.bind(this, tab) }>
                  { tab.charAt(0).toUpperCase() + tab.slice(1) }
                </a>
              </li>
            );
          }) }
        </ul>
        <div className="tabs__content">
          <Pane type={ this.state.selected } { ...this.state } />
        </div>
      </div>
    );
  }
}

export default Page;