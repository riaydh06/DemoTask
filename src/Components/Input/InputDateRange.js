import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import { fonts, colors, weights } from "../../Styles/BaseStyle";
import assets from "../../Assets";


const styles = {
    wrapper : {
        width: '100%',
        position: 'relative'
    },
    inputStyle: {
      backgroundImage: `url(${assets.CalendarIcon})`,
      backgroundPosition: '10px center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '2px',
      minHeight: '50px',
      width: '100%',
      textAlign: 'left',
      textDecoration: 'none',
      padding: '0 15px 0 35px',
      backgroundColor: colors.colorWhite,
  },
  calStyle:{
    position: 'absolute', 
    zIndex: 999, 
    backgroundColor:colors.colorWhite, 
    width: '320px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.15)'
  }
}

class InputDateRange extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
      value: ''
    };
  }
  onSelect = (value, states) => {
    this.props.onSelect(value)
    this.setState({ value, states, isOpen: false });
  };
  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {title, value, placeholder,fontColor, fontSize, fontFamily, fontWeight, required, borderColor} = this.props;
    return (
      <div style={styles.wrapper}>
        {
          title && <p>{title}</p>
        }
        <div
          onClick={this.onToggle}
        > 
          <input 
            style={{
              ...styles.inputStyle,
              color: fontColor||colors.colorText3,
              fontFamily: fontFamily,
              fontWeight: fontWeight||weights.fw100,
              fontSize: fontSize||fonts.fs14,
              border: `3px solid ${borderColor||colors.colorYellow}`,
            }}
            value={value ? value.start.format("DD-MMM-YYYY") +" - "+ value.end.format("DD-MMM-YYYY"): ''}
            placeholder={placeholder}
            onChange={()=>{}}
            required={required}
          />
        </div>
        <div style={styles.calStyle}>
          {this.state.isOpen && (
            <DateRangePicker
              numberOfCalendars={1}
              value={value}
              onSelect={this.onSelect}
              singleDateRange={true}
            />
          )}
        </div>
      </div>
    );
  }
}

export default InputDateRange;
