import React from 'react';

const styles = {
    wrapperStyle: {
    }
}

const DetailInfo = ({
    title,
    subtitle,
    bold
}) =>{
    return (
        <div class="row"  style={{width: '100%'}}>
            <div class="col-6" style={{textAlign: 'left'}}>
                <p style={{fontWeight: bold ?'bold': 'normal'}}>
                    {title}
                </p>
            </div>
            <div class="col-6" style={{textAlign: 'right'}}>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>

    )
}

export default DetailInfo;