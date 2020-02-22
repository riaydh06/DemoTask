import React, {useState} from 'react';
import { flex, mr5, mb5 } from '../../Styles/CommonStyle';
import {colors, fonts, weights} from '../../Styles/BaseStyle'
import ButtonPrimary from '../Button/ButtonPrimary';

const styles = {
    wrapper : {
        ...flex, 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    inputStyle: {
      borderRadius: '4px',
      minHeight: '50px',
      width: '50px',
      textAlign: 'center',
      textDecoration: 'none',
      padding: '0 15px 0 15px',
      backgroundColor: colors.colorWhite,
  }
}

const InputNumber = ({
    title,
    fontSize,
    fontFamily,
    fontWeight,
    fontColor,
    value,
    placeholder,
    required,
    onClick,
    onChange,
    disabled,
    border,
    initialvalue,
    lastValue
}) =>{
    const [count, setCount] = useState(0)
    const decrement = () => {
        let val = parseInt(count,10)>(initialvalue||0)?parseInt(count,10)-1: count; 
        setCount(val);
        onClick(val);
    }

    const increment = () => {
        let val = parseInt(count,10)<(lastValue||9999)?parseInt(count,10)+1: count;
        setCount(val);
        onClick(val);
    }

    const handleOnChange = (e) => {
        let val = e.target.value.replace(/[^\d]/g, '');
        setCount(val);
        onChange(val);
    }

    return (
        <div style={styles.wrapper}>
            <div>
            {
                title && <p>{title}</p>
            }
            </div>
            <div style={flex}>
                <div style={mr5}>
                    <ButtonPrimary 
                        content="-" 
                        buttonHeight="40px" 
                        fontSize={fontSize}  
                        fontColor={fontColor} 
                        onClick={()=> decrement()}
                    />
                </div>
                <div style={mr5}>
                    <input 
                        style={{
                            ...styles.inputStyle,
                            color: fontColor||colors.colorText,
                            fontFamily: fontFamily,
                            fontWeight: fontWeight||weights.fw100,
                            fontSize: fontSize||fonts.fs14,
                            border: border ?`2px solid ${colors.colorGray}`: 'none'
                        }}
                        value={value}
                        placeholder={placeholder||0}
                        required={required}
                        type="text"
                        onChange={(e)=> handleOnChange(e) }
                        maxLength="2"
                        disabled
                    />
                </div>
                <ButtonPrimary 
                    content="+" 
                    fontSize={fontSize} 
                    buttonHeight="40px" 
                    fontColor={fontColor} 
                    onClick={()=>increment()} 
                />
            </div>
             
        </div>   
    )
}

export default InputNumber;