import React from 'react';



const MovieList = (props)=>{
    const FavouriteComponent = props.favouriteComponent;
    const handleFavouritesdeep = props.handleFavouritesClick
    return (

        <>
            {props.movies.map((movie,index)=>(
            
            
            <div style={{height:350,width:175}} className="image-container d-flex justify-content-start mt-5 m-5">
                <img  src={movie.Poster} alt ='movie' ></img>
                <div className='overlay d-flex align-items-center justify-content-center'>
                    <div style={{width:300}} className='d-flex flex-column'>
                        <h3 className='font-movie-title mb-5'> 
                             {movie.Title +' '}{'('+ movie.Year+ ')'}
                        </h3>
                        <FavouriteComponent handleFav= {handleFavouritesdeep} propsMovie={movie}/>
                    </div>
                    
                </div>
            </div>

            ))}
        </>
    );
};

export default MovieList;