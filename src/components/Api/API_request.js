import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/";
// const per_page = 12;
const APIkey = '5d369441bd67a61471936fd86df9d048';

// async function onFetch() {
//   const resp = await axios.get(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`
//   );
//   return resp.data.results;
// }
const onFetch = (page = 1) => {
     return fetch(`${baseUrl}trending/movie/day?api_key=${APIkey}&page=${page}`)
         .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Sorry, something went wrong. Please, try againe later`))
            })
}

// const fetchRequest = (name,page) => {
//     return fetch(`${baseUrl}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             return Promise.reject(new Error(`Oopps...no images with this name - ${this.props.inputName}`))
//         })
// }
async function onFetchSearch(inputName) {
  const resp = await axios.get(
    `${baseUrl}search/movie?api_key=${APIkey}&language=en-US&include_adult=false&query=${inputName}`
  );
  return resp.data.results;
}

// async function fetchMoviesInfo(id)  {
//      const response = await axios.get(`${baseUrl}movie/${id}?api_key=${APIkey}&language=en-US`)
//   return response.data.results;
          
// }
const fetchMoviesInfo = (id) => {
     return fetch(`${baseUrl}movie/${id}?api_key=${APIkey}&language=en-US`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Oopps...no movies info`))
            })
}

const fetchMovieReviews = (review_id) => {
    return fetch(`${baseUrl}movie/${review_id}/reviews?api_key=${APIkey}&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Oopps...no reviews`))
        })
}




const fetchMovieCast = (person_id) => {
     return fetch(`${baseUrl}movie/${person_id}/credits?api_key=${APIkey}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Oopps...no cast`))
            })
}
export {onFetch,onFetchSearch,fetchMoviesInfo, fetchMovieReviews, fetchMovieCast};
