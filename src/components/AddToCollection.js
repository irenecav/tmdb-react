import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const AddToCollection = ({ colecciones = [], peli = {}, onAdd }) => {
  const coleccionesFiltradas = colecciones.filter(
    ({ movies = [] }) => !movies.some(({ id }) => id == peli.id)
  );

  return coleccionesFiltradas.length ? (
    <DropdownButton class="btn btn-primary" title="Add to Collection">
      {coleccionesFiltradas.map(({ title, id }) => (
        <Dropdown.Item key={id} onClick={() => onAdd(peli, id)}>
          {title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  ) : null;
};

export default AddToCollection;
