import React from 'react';
import CollectionCard from '../components/CollectionCard';
import { withCollectionsContext } from '../components/CollectionsContext';
import CreateCollection from '../components/CreateCollection';

class ShowCollections extends React.Component {
  state = { modalShow: false };

  render() {
    const { collections = [] } = this.props.context;
    return (
      <>
        <header className="titulo">
          <h1>Collections</h1>
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Add Collection
          </button>
          <CreateCollection
            show={this.state.modalShow}
            onCreate={this.addHandler}
            onHide={() => this.setState({ modalShow: false })}
          />
        </header>

        {collections.map(coleccion => (
          <CollectionCard
            {...coleccion}
            key={coleccion.id}
            number={coleccion.movies.length}
            onDelete={this.deleteHandler}
          />
        ))}
      </>
    );
  }

  addHandler = coleccion => this.props.context.createCollection(coleccion);

  deleteHandler = id => this.props.context.removeCollectionById(id);
}

export default withCollectionsContext(ShowCollections);
