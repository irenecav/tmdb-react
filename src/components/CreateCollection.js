import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class CreateCollection extends React.Component {
  state = {
    title: '',
    overview: ''
  };

  render() {
    const { title, overview } = this.state;
    const { show, onHide } = this.props;

    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Collection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              value={title}
              type="text"
              className="form-control mr-sm-2"
              name="title"
              placeholder="Enter Title"
              aria-label="Title"
              onChange={this.update}
            />
          </Form.Group>
          <Form.Group controlId="formOverview">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              value={overview}
              type="text"
              className="form-control mr-sm-2"
              name="overview"
              placeholder="Enter Description"
              aria-label="Description"
              onChange={this.update}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={this.createHandler}
            disabled={this.isDisabled()}
          >
            Create New
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

  update = ({ target: { value, name } }) =>
    this.setState({
      [name]: value
    });

  createHandler = () => {
    this.props.onCreate(this.state);
    this.props.onHide();

    this.setState({
      title: '',
      overview: ''
    });
  };

  isDisabled = () => {
    const { title, overview } = this.state;
    return !title || !overview;
  };
}

export default CreateCollection;
