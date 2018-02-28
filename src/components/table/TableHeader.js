import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.Component {

  _normalizeHeader(header) {
    return (header.charAt(0).toUpperCase() + header.slice(1))
      .split('_')
      .join(' ');
  }

  render() {
    return (
      <tr role="row">
        { this.props.list.map((h, i) => (
          <th
            key={ i }
            className={ i === 0 ? 'col-lg-1' : '' }
            data-name={ h }
            onClick={ this.props.handleClick }
          >
            { this._normalizeHeader(h) }
          </th>
        )) }
      </tr>
    );
  }
}

TableHeader.propTypes = {
  list: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TableHeader;