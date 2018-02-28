import React from 'react';
import PropTypes from 'prop-types';

class StatusRow extends React.Component {
  render() {
    return(
      <tr>
        <td colSpan={ this.props.headers.length } className="text-right">
          Total: { this.props.items.length }
        </td>
      </tr>
    );
  }
}

StatusRow.propTypes = {
  headers: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired
};

export default StatusRow;