import React from 'react';


const AddFavourite = (props) => {

    
    return(
        <div onClick={()=>props.handleFav(props.propsMovie)} className='d-flex flex-row align-items-baseline justify-content-around '>
        
            <p className='mr-2 fs-6 font-link-fav'>
                Add to Favourites
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        </div>
    )


};

export default AddFavourite;