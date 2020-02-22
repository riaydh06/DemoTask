import React, {useState} from "react";
import { fonts, colors, weights } from "../../Styles/BaseStyle";
import assets from "../../Assets";
import { mb10, flex, column, mb5 } from "../../Styles/CommonStyle";
import { InputNumber } from "..";


const styles = {
    wrapper : {
        position: 'relative',
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
    },
    filterStyle:{
        position: 'absolute', 
        zIndex: 999, 
        backgroundColor:colors.colorWhite, 
        width: '320px', 
        padding: '20px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.15)'
    }
}

const InputFilter = ({
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
    const [show, setShow] = useState(false);
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [room, setRoom] = useState(1);
    return (
      <div style={styles.wrapper}>
        { 
            title && (
                <p> {title} </p>
            )
        }
        <div style={{...flex, alignItems: 'center'}} onClick={()=> {setShow(!show); onChange({adult, children, room});}}>
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
                value={`${adult} ${adult>1 ? 'adult': 'adults'} . ${children} Children . ${room} Room`}
                // onChange={(e)=> onChange(e.target.value)}
                placeholder={`${adult} ${adult>1 ? 'adult': 'adults'} . ${children} Children . ${room} Room`}
                required={required}
                type={type||'text'}
            />
        </div>
        {show && (
            <div style={styles.filterStyle}>
                <div style={mb5}>
                    <InputNumber
                        title="Guest"
                        value={adult}
                        initialvalue={1}
                        lastValue={30}
                        onClick={value=>{setAdult(value); onChange({adult: value, children, room});}}
                        onChange={value=> setAdult( value.replace(/[^\d]/g, ''))}
                    />
                </div>
                <div style={mb5}>
                    <InputNumber
                        title="Children"
                        value={children}
                        initialvalue={0}
                        lastValue={10}
                        onClick={value=>{setChildren(value); onChange({adult, children: value, room});}}
                        onChange={value=> setChildren( value.replace(/[^\d]/g, ''))}
                    />
                </div>
                <div style={mb5}>
                    <InputNumber
                        title="Room"
                        value={room}
                        initialvalue={1}
                        lastValue={30}
                        onClick={value=>{setRoom(value); onChange({adult, children, room: value});}}
                        onChange={value=> setChildren( value.replace(/[^\d]/g, ''))}
                    />
                </div>
            </div>
        )}
      
      </div>
    );
  
}

export default InputFilter;
