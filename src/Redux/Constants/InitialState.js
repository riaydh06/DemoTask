const initialState = {
    hotelList:{
        loading: false,
        success: false,
        failed: false,
        data: []
    },
    searchList:{
        loading: false,
        success: false,
        failed: false,
        data: []
    },
    details:{
        loading: false,
        success: false,
        failed: false,
        data: {}
    },
    addHotel:{
        loading: false,
        success: false,
        failed: false,
    },
    reservation: {
        loading: false,
        success: false,
        failed: false
    }
}

export default initialState;