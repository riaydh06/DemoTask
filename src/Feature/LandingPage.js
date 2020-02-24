import React, { Component } from 'react';
import { Header, ImageListFirst, ImageListSecond, ImageListThird, ImageListForth, InputText, InputDateRange, InputNumber, InputFilter, Filter } from '../Components';
import { mb50, mb40, mt40, flex } from '../Styles/CommonStyle';
import { connect } from "react-redux";
import { fetchHotelList, fetchHotelSearchList } from '../Redux/Actions/LandingAction';


class LandingPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
        search: '',
        date: '',
        guests: 1
    }
  }

  searchHotel = (value) => {
    console.log(value)
    this.props.handleFetchHotelSearchList(value);
  }

  componentDidMount() {
    this.props.handleFetchHotelList();
  }

  render() {
    const {hotelList, searchList} = this.props;
    console.log( searchList)
    return (
        <div class="container">
            <div class="row" style={mb50}>
                <Header title="Resorts" subtitle="Treat yourself! your dream resort stayis just few clicks aways" />
                <Filter onChange={(value)=> this.searchHotel(value)} />
            </div>
            {
                !searchList.success && !searchList.loading && (
                    <div>
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
                    </div>
                )
            }
            {
                searchList.success && (
                    <div class="row w-100" style={mb50}>
                        <ImageListForth
                            items={searchList.data}
                        />
                    </div>)
            }

            {
                searchList.data.length === 0 && (
                    <div class="row w-100" style={{...flex,...mb40,...mt40,justifyContent: 'center' }}>
                        No hotel found
                    </div>)
            }
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    handleFetchHotelList: () => {
        dispatch(fetchHotelList());
    },
    handleFetchHotelSearchList: (data) => {
        console.log(data)
        dispatch(fetchHotelSearchList(data));
    },
});

function mapStateToProps(state) {
  return {
    hotelList: state.data.hotelList,
    searchList: state.data.searchList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
