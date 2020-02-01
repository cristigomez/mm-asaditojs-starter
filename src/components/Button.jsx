import React from 'react';

const Button = ({category, getRandomGifUrl, addFavoriteGif}) => {
    return (
        <button
            className={`button button--${category}`} 
            onClick= {() => category === 'random' ? getRandomGifUrl() : addFavoriteGif()
            } >


            <span role='img' aria-label='emoji'>
                {category === 'random' ? "🎲" : "⭐" }   
            </span> 
        </button>
    ) 
}

export default Button;