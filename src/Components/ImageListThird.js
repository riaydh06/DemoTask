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

const ImageListThird = ({
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
                            <Link to="/Details/1" style={{ textDecoration: 'none', color: 'black' }}>
                                <div class="row">
                                    <img src={item.image} style={{height: '140px', width:  '150px'}} class="rounded" alt="logo" />
                                </div>
                                <div class="row" style={{textAlign: 'left', width: '150px'}}>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageListThird;