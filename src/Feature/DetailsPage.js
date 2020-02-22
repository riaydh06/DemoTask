import React, { Component } from 'react';
import { Header, Details, DetailInfo, Filter, InputDateRange, InputFilter } from '../Components';
import data from '../api.json'
import assets from '../Assets';
import { mb40, mr5, flex, column, mb5, mb10 } from '../Styles/CommonStyle';
import { colors } from '../Styles/BaseStyle';

const styles = {
    boxWrapper: {
        ...flex,
        ...column,
        justifyContent: 'center',
        border: `1px solid 	${colors.colorGray}`, 
        padding: '20px' , 
        borderRadius: '5px'
    }
}

class LandingPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
        date: '',
        guest: ''
    }
  }

  render() {
    console.log(data)
    const {date,guest} = this.state;
    return (
        <div class="container">
            <div class="row" style={mb40}>
                <Header title="Resorts" subtitle="Treat yourself! your dream resort stayis just few clicks aways" />
                <Filter onChange={(value)=> console.log(value)} />
            </div>
            <div class="row">
                <h3 style={{fontWeight: 'bold', color: 'blue'}}>
                    Hotel Alborada ocean Club
                </h3>
            </div>
            <div class="row">
                <p>
                    Hotel Alborada ocean Club
                </p>
            </div>
            <div class="row" style={mb40}>
                <img src="https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg" style={{height: '500px', width:  '100%'}} class="rounded" alt="logo" />
            </div>
            <div class="row" style={mb40}>
                <div class="col-sm-8 col-md-8">
                    <div class="row">
                        <h3 style={{fontWeight: 'bold'}}>
                            Hotel Alborada ocean Club
                        </h3>
                    </div>
                    <div class="row">
                        <p> Greater London</p>
                    </div>
                    <div class="row">
                        <Details 
                            title="Privet room in flat"
                            subtitle="2 guest 1 bedroom 1 bed 1 shared bathroom"
                            image={assets.Room}
                        />
                    </div>
                    <div class="row">
                        <Details 
                            title="Self Check-in"
                            subtitle="Check yourself in with the lockbox"
                            image={assets.CheckIn}
                        />
                    </div>
                    <div class="row">
                        <Details 
                            title="Breakfast"
                            subtitle="this is one of the few places that has this feature"
                            image={assets.Breakfast}
                        />
                    </div>
                    <div class="row">
                        <Details 
                            title="Great communication"
                            subtitle="100% of recent guests rated shimmy 5-star in communication"
                            image={assets.Phone}
                        />
                    </div>
                    <div class="row">
                        <p>A spacious double room with a comfy king size bed in the heart of the east end</p>
                        <ul style={{listStyleType:'none'}}>
                            <li>- 5 mins walk from underground</li>
                            <li>- 5 mins walk to shadwell DLR station</li>
                            <li>- 10 mins by train to city</li>
                            <li>- Eady access to all tourist destinations</li>
                            <li>- Large variety of pubs and restaurants close by</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div style={styles.boxWrapper}>
                        <div style={flex}>
                            <h4 style={{fontWeight: 'bold',...mr5}}>€24</h4>
                            <p>per night</p>
                        </div>
                        <div style={mb10}>
                            <InputDateRange
                                title="Date"
                                placeholder="Select Your Dates"
                                value={date}
                                onSelect={value=> this.setState({date:value})}
                                borderColor={colors.colorGray}
                                borderWidth={1}
                            />
                        </div>
                        <div style={mb10}>
                            <InputFilter
                                title="Guest"
                                placeholder="Enter Name"
                                icon={'User'}
                                value={guest}
                                onChange={value=> this.setState({guest: value})}
                                border
                                borderColor={colors.colorGray}
                                borderWidth={1}
                            />
                        </div>
                        <DetailInfo title="€24 × 1 night" subtitle="€24"/>
                        <DetailInfo title="Cleaning fee" subtitle="€24"/>
                        <DetailInfo title="Service fee" subtitle="€24"/>
                        <DetailInfo title="Total" subtitle="€24" bold/>
                        <button type="button" class="btn btn-danger btn-block">Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

  
 export default LandingPage;