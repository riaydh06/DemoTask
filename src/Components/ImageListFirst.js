import React from 'react';
import logo from '../logo.svg';
import StarRatings from 'react-star-ratings';

const styles = {
    wrapperStyle: {
    }
}

const ImageListFirst = ({
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
                        <div class="col-sm">
                            <div class="row">
                                <img src={item.image} style={{height: '200px'}} class="rounded" alt="logo" />
                            </div>
                            <div class="row">
                                <StarRatings
                                    starRatedColor="red"
                                    starEmptyColor="white"
                                    rating={item.rating}
                                    starDimension="16px"
                                    starSpacing="2px"
                                />
                            </div>
                            <div class="row" style={{textAlign: 'left'}}>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div class="row" style={{textAlign: 'left'}}>
                                <div class="col">
                                    <img src={logo} style={{height: '50px'}} alt="logo" />
                                </div>
                                <div class="col">
                                    <p>
                                        Edit and save to reload.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageListFirst;