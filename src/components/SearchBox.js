import React from 'react';


const SearchBox = (props) => {
    return (
        <div style={{width:300,marginTop:8}} >
            <input 
                className='form-control-lg' 
                placeholder='Type to search...'
                value={props.value}
                onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}

export default SearchBox;