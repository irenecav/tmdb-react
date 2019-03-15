import React from 'react';
import Image from 'react-bootstrap/Image';

const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const PROFILE_PLACEHOLDER = '/assets/images/profile-placeholder.png';

const Crew = ({ crew }) => {
  const slicedCrew = crew.slice(0, 5);

  return (
    <ul className="cast">
      {slicedCrew.map(({ name, job, department, profile_path }, i) => {
        const imgSrc = profile_path
          ? `${IMG_URL}${profile_path}`
          : PROFILE_PLACEHOLDER;
        return (
          <li key={i}>
            <Image
              style={{ height: '4rem', marginRight: '1rem' }}
              src={imgSrc}
              rounded
            />
            {name}
            <span>
              {' '}
              - {job} - {department}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Crew;
