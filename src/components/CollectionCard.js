import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Link from 'react-router-dom/Link';

const CollectionsCard = props => {
  const { id, title, overview, number, onDelete } = props;

  const borrar = () => onDelete(id);

  return (
    <div className="card__collection">
      <Link to={`/collection/${id}`}>
        <h2>
          <Badge variant="secondary" pill>
            {number}
          </Badge>
          {title}
        </h2>
        <p>{overview}</p>
      </Link>
      {id !== 0 && <i className="far fa-trash-alt" onClick={borrar} />}
    </div>
  );
};

export default CollectionsCard;
