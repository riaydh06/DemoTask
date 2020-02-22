import React from 'react';

const styles = {
    wrapperStyle: {
    }
}

const Details = ({
    title,
    subtitle,
    image
}) =>{
    return (
        <div class="row"  style={{width: '500px'}}>
            <div class="col-1">
                <img src={image} style={{height: '15px'}} class="rounded" alt="logo" />
            </div>
            <div class="col-11" style={{textAlign: 'left'}}>
                <h6 style={{fontWeight: 'bold'}}>
                    {title}
                </h6>
                <p>{subtitle} </p>
            </div>
        </div>

    )
}

export default Details;