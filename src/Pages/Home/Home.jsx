import { useEffect, useState } from 'react';
import { onFetch } from 'components/Api/API_request';
import { Notification } from './Home.styled';
import FilmCard from 'components/FilmCard/FilmCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    onFetch()
      .then(response => {
        if (response.length === 0) {
          setStatus('rejected');
          return;
        }
        setStatus('resolved');
        setMovies(response);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {status === 'idle' && <Notification>Start page</Notification>}
      {status === 'pending' && <div>Loading....</div>}
      {status === 'rejected' && (
        <Notification>
          Oopps...no movies was found.{!error && <div>{error}</div>}
        </Notification>
      )}
      {status === 'resolved' && <FilmCard movies={movies} />}
    </div>
  );
};

export default Home;
