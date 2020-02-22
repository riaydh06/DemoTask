import React from 'react';
import StarRatings from 'react-star-ratings';
import {Link} from "react-router-dom";
import { flex, column, mb0 } from '../../Styles/CommonStyle';

const styles = {
    linkStyle: {
        textDecoration: 'none', color: 'black'
    }
}

const ImageListSecond = ({
    items
}) =>{
    return (
        items.map((item, index)=>(
            <div style={{...flex, ...column, margin: '5px'}} key={index}>
                <Link to="/Details/1" style={styles.linkStyle}>
                    <img src={item.image} style={{height: '240px', width: 160}} class="rounded" alt="logo" />
                    <div style={{width: 160}}>
                        <p>{`${item.price} ${item.title}`}</p>
                    </div>
                    <div style={{...flex, alignItems: 'center'}}>
                        <StarRatings
                            starRatedColor="red"
                            starEmptyColor="white"
                            rating={item.rating}
                            starDimension="16px"
                            starSpacing="2px"
                        />
                        <p style={mb0}>44 reviews</p>
                    </div>
                </Link>
            </div>
        ))      
    )
}

export default ImageListSecond;