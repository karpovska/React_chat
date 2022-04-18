import React from 'react';

function Search() {
    return (
        <div id="search-container">
            <img src={require("../images/user_checked_light.png")} alt="User image" />
            <input type="text" placeholder='Search or start new chat'></input>
        </div>
    )
}

export default Search;