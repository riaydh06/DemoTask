import React from 'react';
import { colors } from '../../Styles/BaseStyle';
import { flex, mb5, mb0 } from '../../Styles/CommonStyle';

const styles = {
    wrapperStyle: {
        ...flex,
        ...mb5,
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: `1px solid ${colors.colorGray}`,
    }
}

const DetailInfo = ({
    title,
    subtitle,
    bold
}) =>{
    return (
        <div style={styles.wrapperStyle}>
            <p style={{fontWeight: bold ?'bold': 'normal', ...mb5}}>{title} </p>
            <p style={mb5}>{subtitle}</p>
        </div>

    )
}

export default DetailInfo;