import React from 'react';

const styles = {
    wrapperStyle: {
    }
}

const Header = ({
    title,
    subtitle
}) =>{
    return (
        <div class="col"  style={{width: '100%', backgroundColor: 'green', padding: '10px', textAlign: 'left'}}>
            <h4>
                {title}
            </h4>
        
            <p>
                {subtitle}
            </p>
        </div>

    )
}

export default Header;