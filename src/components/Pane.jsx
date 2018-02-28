import React from 'react';

import TableHeader from 'components/table/TableHeader';
import SearchFields from 'components/table/SearchFields';
import StatusRow from 'components/table/StatusRow';
import AddModal from 'components/AddModal';

import Sort from 'helpers/Sort';
import Filter from 'helpers/Filter';

class Pane extends React.Component {

  _filter(e) {
    const f = new Filter();
    this.setState({
      items: f.filter(e, this.props.items)
    });
  }

  _sort(e) {
    const s = new Sort();
    this.setState({
      items: s.sortItems(e, this.props.items)
    })
  }

  render() {
    return (
      <div>
        <table className="table table-striped table-bordered table-hover" cellSpacing="0" role="grid">
          <thead>

            <TableHeader
              list={ this.props.headers }
              handleClick={ this._sort.bind(this) }
            />

          </thead>
          <tbody>

          <SearchFields
            list={ this.props.headers }
            handleClick={ this._filter.bind(this) }
          />

          { this.props.items.map((item, i) => (
              <tr key={ i }>
                { this.props.headers.map((title, ind) => <td key={ ind }>{ item[title] }</td>) }
              </tr>
            )
          ) }

          <StatusRow { ...this.props } />

          </tbody>
        </table>
      </div>  
      );
    }
  }

  export default Pane;