import React from 'react';
import StarRatings from 'react-star-ratings';
import {Link} from "react-router-dom";
import { mb20, flex, mb0, column } from '../../Styles/CommonStyle';

const styles = {
    linkStyle: {
        textDecoration: 'none', color: 'black'
    }
}

const ImageListForth = ({
    items
}) =>{
    return (
        items.map((item, index)=>(
            <Link class="w-100" to="/Details/1" style={{...styles.linkStyle, ...mb20}} key={index}>
                <div class="row">
                    <div class="col-sm-4">
                        <img src={item.image} style={{height: '240px'}} class="rounded" alt="logo" />
                    </div>
                    <div class="col-sm-8">
                        <div style={{...flex, ...column, padding: '20px',justifyContent: 'space-between', backgroundColor: 'white'}}>
                            <div style={{...flex, justifyContent: 'space-between', alignItems: 'center'}}>
                                <p> Privet Room </p>
                                <div style={flex} >
                                    <StarRatings
                                        starRatedColor="red"
                                        starEmptyColor="white"
                                        rating={item.rating}
                                        starDimension="16px"
                                        starSpacing="2px"
                                    />
                                    <p style={mb0}>(207)</p>
                                </div>
                            </div>
                            <p>{item.title} </p>
                            <p>2 guest , 1 bed room, 1 bed, 1 shared boothroom, wifi kitchen, heating washing maching</p>
                            <div style={{...flex, ...column, alignItems: 'flex-end'}}>
                                <p style={{fontWeight: 'bold'}}> { `${item.price} /night`} </p>
                                <p>{`${item.price} total`} </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </Link>
        ))     
    )
}

export default ImageListForth;