import React, { Component } from 'react';
import { InputText, InputNumber } from '../Components';
import { mb50, mb40, mt40, flex, mb20 } from '../Styles/CommonStyle';
import { connect } from "react-redux";
import { fetchHotelList, fetchHotelSearchList, fetchHotelAdd } from '../Redux/Actions/LandingAction';
import { colors } from '../Styles/BaseStyle';


class AddData extends Component {

  constructor(props) {
    super(props)

    this.state = {
        title: '',
        description: '',
        rating: 1,
        price: '',
        type: '',
        comments: '',
        country: '',
        image: '',
        avatar: ''
    }
  }

  handleAddHotel = (value) => {
      console.log(this.state)
    this.props.handleFetchHotelAdd(this.state);
  }



  render() {
    const {hotelList, searchList} = this.props;
    const {
        title,
        description,
        rating,
        price,
        type,
        comments,
        country,
        image,
        avatar
    } = this.state;
    return (
        <div class="container">
            {/* <div class="row" style={mb50}>
                <Header title="Resorts" subtitle="Treat yourself! your dream resort stayis just few clicks aways" />
                <Filter onChange={(value)=> this.searchHotel(value)} />
            </div> */}
            <div>
                <div class="row">
                    
                    <div style={{...mb20, ...mt40}}>
                        <h3> Add Hotel List </h3>
                    </div>

                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="Title/Name"
                            placeholder="Enter Title/Name"
                            icon={'User'}
                            value={title}
                            onChange={value=> this.setState({title: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="Description"
                            placeholder="Description"
                            icon={'User'}
                            value={description}
                            onChange={value=> this.setState({description: value})}
                            border
                            borderColor={colors.colorGray}
                            required
                        />
                    </div>
                    
                    <div  style={{...mb20,width: '100%'}} >
                        <InputNumber
                            title="Rating"
                            value={rating}
                            initialvalue={1}
                            lastValue={5}
                            onClick={value=>this.setState({rating:value})}
                            onChange={value=> this.setState( {rating: value.replace(/[^\d]/g, '')})}
                        />
                    </div>
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="Price"
                            placeholder="Price"
                            icon={'User'}
                            value={price}
                            onChange={value=> this.setState({price: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="Type"
                            placeholder="Type"
                            icon={'User'}
                            value={type}
                            onChange={value=> this.setState({type: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="comments"
                            placeholder="Enter comments"
                            icon={'User'}
                            value={comments}
                            onChange={value=> this.setState({comments: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="country"
                            placeholder="country"
                            icon={'User'}
                            value={country}
                            onChange={value=> this.setState({country: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="Image"
                            placeholder="Paste Link here"
                            icon={'User'}
                            value={image}
                            onChange={value=> this.setState({image: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    <div  style={{...mb20,width: '100%'}} >
                        <InputText
                            title="Avatar"
                            placeholder="Paste Link here"
                            icon={'User'}
                            value={avatar}
                            onChange={value=> this.setState({avatar: value})}
                            border
                            borderColor={colors.colorGray}
                        />
                    </div>
                    <div style={{...mb40,width: '100%'}}>
                        <button onClick={()=> this.handleAddHotel() } type="button" class="btn btn-danger btn-block">Add Data</button>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    handleFetchHotelAdd: (data) => {
        dispatch(fetchHotelAdd(data));
    }
});

function mapStateToProps(state) {
  return {
    addHotel: state.data.addHotel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddData);
