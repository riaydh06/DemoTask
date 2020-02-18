import React from 'react';
import logo from '../logo.svg';
import StarRatings from 'react-star-ratings';
import {
    Link
  } from "react-router-dom";

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
                    items.map((item, index)=>(
                        <div class="col"  style={{width: '350px'}}>
                            <Link to="/Details/1" style={{ textDecoration: 'none', color: 'black' }}>
                                <div class="row">
                                    <img src={item.image} style={{height: '240px'}} class="rounded" alt="logo" />
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
                                <div class="row" style={{textAlign: 'left', width: '350px'}}>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                                <div class="row" style={{textAlign: 'left'}}>
                                    <div class="col-3">
                                        <img src={item.avatar} style={{height: '50px'}} alt="logo" />
                                    </div>
                                    <div class="col-9">
                                        <div class="row" style={{textAlign: 'left'}}>
                                            <p style={{fontWeight: 'bold'}}>
                                            {item.username}
                                            </p>
                                        </div>
                                        <div class="row" style={{textAlign: 'left'}}>
                                            <p>
                                            {item.comments}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default ImageListFirst;