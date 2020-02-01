import React from 'react';
import Button from './Button';

const Card = ({ gifUrl ,getRandomGifUrl, addFavoriteGif }) => {
    return (
       <div className='card'>
          {
              gifUrl === '' ? (
                <p className='subtitle'>
                <span className='emoji' role='img'aria-label='Cat'>
                    🐈
                </span>
                </p>
              ) : (
                  <img src={gifUrl} className='margin-bottom' alt='Cat' />
              )

          } 




           

           <div>
               <Button category='random' getRandomGifUrl={getRandomGifUrl}/>
               <Button category='favorite' addFavoriteGif={addFavoriteGif}/>
           </div>

        </div> 
    )
}

export default Card;