import { fetchMovieCast } from 'components/Api/API_request';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const baseImageURL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchMovieCast(id)
      .then(response => {
        setCast(response.cast);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {!cast.length && <div>No reviews yet {error}</div>}
      <ul>
        {cast &&
          cast.map(cast => (
            <li key={cast.id}>
              <div>
                <img
                  src={
                    cast.profile_path
                      ? `${baseImageURL}${cast.profile_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  width="200"
                  alt={cast.name}
                />
              </div>
              <h2>{cast.name}</h2>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
