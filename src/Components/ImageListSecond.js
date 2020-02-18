import React from 'react';
import logo from '../logo.svg';
import StarRatings from 'react-star-ratings';

const styles = {
    wrapperStyle: {
    }
}

const ImageListSecond = ({
    items,
    image,
    description,
    rating,
}) =>{
    return (
        <div class="container">
            <div class="row">
                {
                    items.map(item=>(
                        <div class="col" style={{width: 150}}>
                            <div class="row">
                                <img src={item.image} style={{height: '240px', width: 150}} class="rounded" alt="logo" />
                            </div>
                            <div class="row" style={{textAlign: 'left', width: 150}}>
                                <p>
                                   `${item.price} ${item.title}`
                                </p>
                            </div>
                            <div class="row">
                                <StarRatings
                                    starRatedColor="red"
                                    starEmptyColor="white"
                                    rating={item.rating}
                                    starDimension="16px"
                                    starSpacing="2px"
                                />
                                <p>
                                44 reviews
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageListSecond;