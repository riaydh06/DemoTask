import React, { Component } from 'react';
import { Header, ImageListFirst, ImageListSecond, ImageListThird, ImageListForth, InputText, InputDateRange, InputNumber, InputFilter, Filter } from '../Components';
import data from '../api.json'
import { mb50, mb40, flex } from '../Styles/CommonStyle';
import { connect } from "react-redux";
import { fetchHotelList } from '../Redux/Actions/LandingAction';

const styles = {
    wrapper: {
        
    }
}

class LandingPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
        search: '',
        date: '',
        guests: 1
    }
  }

  componentDidMount() {
    this.props.handleFetchHotelList()
  }

  render() {
    const {hotelList} = this.props;
    console.log(hotelList)
    return (
        <div class="container">
            <div class="row" style={mb50}>
                <Header title="Resorts" subtitle="Treat yourself! your dream resort stayis just few clicks aways" />
                <Filter onChange={(value)=> console.log(value)} />
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <h3> What guests are saying about homes in the United Kingdom </h3>
                    <p> United Kingdom homes were rated 4.7 out of 5 stars with 10,500,500+ reviews</p>
                </div>
            </div>
            <div class="row" style={mb40}>
                <ImageListFirst
                    items={hotelList.data}
                />
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <h3>Just Book</h3>
                </div>
            </div>
             <div class="row" style={mb50}>
                <ImageListSecond
                    items={hotelList.data}
                />
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <h3>Places in London</h3>
                </div>
            </div>
            <div class="row" style={mb50}>
                <ImageListThird
                    items={hotelList.data}
                />
            </div>
            <div class="row w-100" style={mb50}>
                <ImageListForth
                    items={hotelList.data}
                />
            </div>
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    handleFetchHotelList: () => {
        dispatch(fetchHotelList());
    },
});

function mapStateToProps(state) {
    console.log(state)
  return {
    hotelList: state.data.hotelList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
