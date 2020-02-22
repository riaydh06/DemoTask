import React from "react";
import { fonts, colors, weights } from "../../Styles/BaseStyle";
import assets from "../../Assets";
import { flex, column } from "../../Styles/CommonStyle";


const styles = {
    wrapper : {
        ...flex,
        ...column, 
        width: '100%'
    },
    inputStyle: {
        backgroundSize: '14px 18px',
        backgroundRepeat: 'no-repeat',
        borderRadius: '2px',
        height: '50px',
        width: '100%',
        textAlign: 'left',
        textDecoration: 'none',
        backgroundColor: colors.colorWhite,
    }
}

const InputText = ({
    title,
    placeholder, 
    type,
    fontColor, 
    fontSize, 
    fontFamily, 
    fontWeight,
    icon, 
    required, 
    value, 
    onChange,
    maxLength, 
    border,
    borderColor
}) => {
    return (
      <div style={styles.wrapper}>
        { 
            title && (
                <p> {title} </p>
            )
        }
        <div style={{...flex, alignItems: 'center'}}>
            <input 
                style={{
                    ...styles.inputStyle,
                    backgroundImage: `url(${assets[icon]})`,
                    color: fontColor||colors.colorText,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight|| weights.fw100,
                    fontSize: fontSize||fonts.fs14,
                    border: border? `3px solid ${borderColor ||colors.colorYellow}` : 'none',
                    backgroundPosition: `${border? '10px': '0px'} center`,
                    padding: border ? `0 15px 0 ${icon? '35px': '15px'}` : '0 15px 0 25px' ,
                }}
                maxLength={maxLength || "50"}
                value={value}
                onChange={(e)=> onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                type={type||'text'}
            />
        </div>
      
      </div>
    );
  
}

export default InputText;
