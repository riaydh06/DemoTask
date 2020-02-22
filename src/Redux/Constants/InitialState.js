const initialState = {
    hotelList:{
        loading: false,
        success: false,
        failed: false,
        data: {}
    },
    searchList:{
        loading: false,
        success: false,
        failed: false,
        data: []
    },
    detils:{
        loading: false,
        success: false,
        failed: false,
        data: {}
    },
    reservation: {
        loading: false,
        success: false,
        failed: false
    }
}

export default initialState;