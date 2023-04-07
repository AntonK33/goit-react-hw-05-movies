import { onFetchSearch } from 'components/Api/API_request';
import SearchBar from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { useEffect } from 'react';
import FilmCard from 'components/FilmCard/FilmCard';
import { Notification } from './Movie.styled';
import { useSearchParams } from 'react-router-dom';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      return;
    }
    setStatus('pending');

    onFetchSearch(name)
      .then(response => {
        if (response.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(response);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [name]);

  // const newSearch = name => {
  //   setNameSearch(name);
  //   setMovies([]);
  const newSearch = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  return (
    <div>
      <SearchBar onSubmit={newSearch} />
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
    </div>
  );
};

export default Movie;
