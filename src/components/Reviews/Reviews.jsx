import { fetchMovieReviews } from 'components/Api/API_request';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(id)
      .then(response => {
        setReviews(response.results);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {!reviews.length && <div>No reviews yet {error}</div>}
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
