import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link} from "react-router-dom";
import { flex, column, mr10, mb5 } from '../../Styles/CommonStyle';

const styles = {
    linkStyle: {
        textDecoration: 'none', color: 'black'
    },
    imageStyle: {
        height: '240px',
        width: '330px'
    }
}

const ImageListFirst = ({
    items
}) =>{
    return (
        items.map((item, index)=>(
            <div style={{...flex, margin: '10px'}} key={index}>
                <Link to={`/Details/${item._id}`} style={styles.linkStyle}>
                    <div>
                        <img src={item.image} style={styles.imageStyle} class="rounded" alt="logo" />
                    </div>
                    <StarRatings
                        starRatedColor="red"
                        starEmptyColor="white"
                        rating={parseFloat(item.rating)}
                        starDimension="16px"
                        starSpacing="2px"
                    />
                    <div style={{width: '330px'}}>
                        <p>{item.description}</p>
                    </div>
                    <div style={flex}>
                        <div style={{...flex, ...mr10}}>
                            <img src={item.avatar} style={{height: '50px'}} alt="logo" />
                        </div>
                        <div style={{...flex, ...column}}>
                            <p style={{fontWeight: 'bold',  ...mb5}}>{item.username}</p>
                            <p>{item.comments} </p>
                        </div>
                    </div>
                </Link>
            </div>   
        ))        
    )
}

export default ImageListFirst;