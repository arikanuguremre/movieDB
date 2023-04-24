import React,{useEffect, useState} from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavorites";
import RemoveFavourites from "./components/RemoveFavorites";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"



const App = () =>{
  const [movies,setMovies] = useState([]);
  const[searchValue, setSearchValue] = useState('')
  const [favourites,setFavourites] = useState([])

  
  const getMovieRequest = async() => {
    const url = `https://www.omdbapi.com/?apikey=c6676612&s=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson)

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }else{
      setMovies([])
    }
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);





  useEffect(()=>{
      const movieFavourites = JSON.parse(
              localStorage.getItem('react-movie-app-favourites')
        );

        setFavourites(movieFavourites)
      
  },[]);


  const saveToLocalStorage = (items) =>{
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  };

  const addFavouriteMovie = (movie) => {

      const movieExists = favourites.some((favMovie) => favMovie.Title === movie.Title);
      if(!movieExists){
        const newFavouriteList = [...favourites,movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
        (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  };




  return (
  <div className='container-fluid  movie-app'>

    <div className='row headerContainer'>
      <MovieListHeading heading="Movie DB"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>

    <div className='row movieListrow'>
      <MovieList movies= {movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourite} />
    </div>

    <div className='row FavouriteContainer'>
        <h2 className="font-link-favs"> Favourites </h2>  
    </div>

    <div className='row movieListrow'>
      <MovieList movies= {favourites} 
      handleFavouritesClick={removeFavouriteMovie} 
      favouriteComponent={RemoveFavourites} />
    </div>


    
  </div>
  );


};

export default App;
