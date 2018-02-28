import React from 'react';
import PropTypes from 'prop-types';

class SearchFields extends React.Component {
  render() {
    return (
      <tr>
        {this.props.list.map((h, i) => (
            <td key={ i }>
              <input type="text" name={ h } onChange={ this.props.handleClick } className="col-lg-12" />
            </td>
          ))}
      </tr>
    );
  }
}

SearchFields.propTypes = {
  list: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SearchFields;