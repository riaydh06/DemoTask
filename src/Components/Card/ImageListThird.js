import React from 'react';
import {
    Link
  } from "react-router-dom";
import { flex } from '../../Styles/CommonStyle';

const styles = {
    linkStyle: {
        textDecoration: 'none', color: 'black'
    }
}

const ImageListThird = ({
    items
}) =>{
    return (
        items.map(item=>(
            <div style={{...flex, margin: '10px'}}>
                <Link to="/Details/1" style={styles.linkStyle}>
                    <img src={item.image} style={{height: '150px', width:  '160px'}} class="rounded" alt="logo" />
                    <div  style={{width: '160px'}}>
                        <p>
                            {item.title}
                        </p>
                    </div>
                </Link>
            </div>
        ))       
    )
}

export default ImageListThird;