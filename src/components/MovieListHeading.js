import React from "react";

const MovieListHeading =(props) => {
    return (
        <div style={{width:300}}>
            <h1 className='font-link-header'>{props.heading}</h1>
        </div>
    )
}
export default MovieListHeading;