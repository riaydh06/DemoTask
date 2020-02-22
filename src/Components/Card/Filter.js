import React, {useState} from "react";
import { flex } from "../../Styles/CommonStyle";
import { InputText,InputDateRange, InputFilter } from "..";


const styles = {
    wrapper : {
        ...flex, 
        flexWrap: 'wrap', 
        width: '100%'
    },
}

const Filter = ({ 
    onChange
}) => {
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const [guest, setGuest] = useState('');
    return (
        <div style={styles.wrapper}>
            <div style={{width: '27%'}}>
                <InputText
                    placeholder="Enter Name"
                    icon={'User'}
                    value={search}
                    onChange={value=> setSearch(value)}
                    border
                />
            </div>
            <div style={{width: '35%'}}>
                <InputDateRange
                    placeholder="Select Your Dates"
                    value={date}
                    onSelect={value=> setDate(value)}
                />
            </div>
            <div style={{width: '28%'}}>
                <InputFilter
                    placeholder="Enter Name"
                    icon={'User'}
                    value={guest}
                    onChange={value=> setGuest(value)}
                    border
                />
            </div>
            <div style={{width: '10%'}}>
                <button onClick={()=> onChange({search, date, guest})} type="button" class="btn btn-success btn-block  btn-lg">Search</button>
            </div>
        </div>
    );
  
}

export default Filter;
