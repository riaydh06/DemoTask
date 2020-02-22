import React from 'react';
import {} from '../../Styles/CommonStyle';
import {colors, weights, fonts} from '../../Styles/BaseStyle'

const styles = {
    buttonStyle: {
        borderRadius: '4px',
        textAlign: 'center',
        textDecoration: 'none',
        padding: '0 15px'
    }
}

const ButtonPrimary = ({
    content,
    fontSize,
    fontColor,
    fontFamily,
    fontWeight,
    borderColor,
    buttonHeight,
    backgroundColor,
    onClick
}) =>{
    return (
            <button 
                style={{
                    backgroundColor: backgroundColor||colors.colorWhite,
                    border: `2px solid ${borderColor||colors.colorGray}`,
                    color: fontColor||colors.colorText,
                    fontSize: fontSize|| fonts.fs16,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight||weights.fw100,
                    height: buttonHeight||'40px',
                    ...styles.buttonStyle
                }}
                type="button" onClick={onClick}
            >
                {content||'Content'}
            </button>
    )
}

export default ButtonPrimary;