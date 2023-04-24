import React, { useEffect, useState } from 'react';






const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const handleFavouritesdeep = props.handleFavouritesClick;

  // State tanımlamaları
  const [moviesWithRatings, setMoviesWithRatings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API sorgusu için fonksiyon tanımlaması
    const fetchRatings = async (movieTitle) => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=c6676612&t=${movieTitle}`);
      const data = await response.json();
      return data.Ratings[0].Value;
    };

    // props.movies array'indeki her bir film için rating sorgusu yaparak moviesWithRatings array'ine eklenmesi
    const addRatingsToMovies = async () => {
      setLoading(true);
      const newMovies = [];

      for (const movie of props.movies) {
        const rating = await fetchRatings(movie.Title);
        const newMovie = {
          ...movie,
          rating: rating,
        };
        newMovies.push(newMovie);
      }

      setMoviesWithRatings(newMovies);
      setLoading(false);
    };

    addRatingsToMovies();
  }, [props.movies]);

  return (
    <>
    {loading ? (
        <h2>Loading...</h2>
    ): (
        moviesWithRatings.map((movie, index) => (
            <div key={index} style={{ height: 350, width: 175 }} className="image-container d-flex justify-content-start mt-5 m-5">
              <img src={movie.Poster} alt="movie"></img>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div style={{ width: 300 }} className="d-flex flex-column">
                  <h3 className="font-movie-title mb-5">
                    {movie.Title + ' '}{'(' + movie.Year + ')'} 
                  </h3>
        
                  <p style={{fontSize:'16px'}}>
                    <i class="fa-brands fa-imdb fa-2xl" style={{color: '#f3ce13',marginRight:'10px'}}></i>
                    {movie.rating}
                  </p>
                  <FavouriteComponent handleFav={handleFavouritesdeep} propsMovie={movie} />
                </div>
              </div>
            </div>
          ))
    )}
    </>
  );
};

export default MovieList;