import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';

import Network from './../helpers/Network';

class AddModal extends React.Component {

    /*
    * human readable labels
    */
    _normalizeFieldName(field) {
      var _f = field.charAt(0).toUpperCase() + field.slice(1);
      return _f.split('_').join(' ');
    }

    save(e) {
      let fd = new FormData(e.target);
      let _n = new Network();

      e.preventDefault();
      _n.saveNewEntry(this.props.type, fd);
      this.props.close();
    }

    render() {
      return (
        <div>
        <div className="row">
        <div className="col-lg-3 pull-right text-right">
        <button type="button" className="btn btn-success" onClick={this.props.add}>
        Add entry
        </button>
        </div>
        </div>

        <Modal show={this.props.open} onHide={this.props.close}>

        <Modal.Header closeButton>
        <Modal.Title>Create New Entry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form horizontal onSubmit={this.save.bind(this)}>
        {this.props.items.map((item, i) => {
          return (
          <FormGroup key={i}>
          <Col componentClass={ControlLabel} sm={3}>
          {this._normalizeFieldName(item)}:
          </Col>
          <Col sm={9}>
          <FormControl type="text" name={item} placeholder={this._normalizeFieldName(item)} />
          </Col>
          </FormGroup>
          );
        })}
        <FormGroup className="text-right">
        <Button onClick={this.props.close}>Close</Button>
        <Button type="submit" className="btn btn-primary">Save</Button>
        </FormGroup>
        </Form>
        </Modal.Body>
        </Modal>
        </div>
        );
    }
  }

  AddModal.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  };

  export default AddModal;