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

const ImageListForth = ({
    items,
    image,
    description,
    rating
}) =>{
    return (
        <div class="container">
            <div class="col">
                {
                    items.map((item, index)=>(
                        <Link to="/Details/1" style={{ textDecoration: 'none', color: 'black' }}>
                            <div class="row" style={{marginBottom: '20px'}}>
                                <div class="col-4">
                                    <img src={item.image} style={{height: '240px', width: 350}} class="rounded" alt="logo" />
                                </div>
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col-6" style={{textAlign: "left"}}>
                                            <p>
                                                Privet Room
                                            </p>
                                    </div>
                                    <div class="col-6 " style={{textAlign: "right"}}>
                                            <div class="row" >
                                                <StarRatings
                                                    starRatedColor="red"
                                                    starEmptyColor="white"
                                                    rating={item.rating}
                                                    starDimension="16px"
                                                    starSpacing="2px"
                                                />
                                                <p>
                                                    (207)
                                                </p>
                                            </div>
                                    </div>
                                    </div>
                                    <div class="row" style={{textAlign: "left"}}>
                                        <div class="col-12">
                                            <p>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row" style={{textAlign: "left"}}>
                                        <div class="col-12">
                                            <p>
                                                2 guest , 1 bed room, 1 bed, 1 shared boothroom, wifi kitchen, heating washing maching
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-12" style={{textAlign: "right"}}>
                                                <p style={{fontWeight: 'bold'}}>
                                                    `${item.price} /night`
                                                </p>
                                                <p>
                                                    `${item.price} total`
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageListForth;