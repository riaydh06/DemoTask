import React from 'react';
import assets from '../../Assets';

const styles = {
    wrapperStyle: {
    }
}

const Header = ({
    title,
    subtitle
}) =>{
    return (
        <div style={{width: '100%', backgroundImage: `url(${assets.Background})`, padding: '10px'}}>
            <h4 style={{color: 'white'}}>{title}</h4>
            <p style={{color: 'white'}}>{subtitle}</p>
        </div>

    )
}

export default Header;