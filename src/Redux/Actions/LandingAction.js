import { axiosInstance } from '../../Config';
import { 
  RESERVATION_REQUEST, 
  RESERVATION_SUCCESS, 
  RESERVATION_FAILED,
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS, 
  HOTEL_LIST_FAILED,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  DETAILS_FAILED,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  ADD_REQUEST,
  ADD_SUCCESS,
  ADD_FAILED
} from '../Constants/ActionType';

// Get Hotel List
export const hotelListRequest = () => ({
  type: HOTEL_LIST_REQUEST
});

export const hotelListSuccess = response => ({
  type: HOTEL_LIST_SUCCESS,
  response
});

export const hotelListFailed = error => ({
  type: HOTEL_LIST_FAILED,
  error
});

export const fetchHotelList = () => (dispatch) => {
  dispatch(hotelListRequest());
  axiosInstance
    .get('/api/hotellist/')
    .then((res) => {
      console.log(res)
      dispatch(hotelListSuccess(res));
    })
    .catch((e) => {
      console.log(e.response)
      dispatch(hotelListFailed(e));
    });
};

// Get Hotel Search List
export const hotelSearchListRequest = () => ({
  type: SEARCH_REQUEST
});

export const hotelSearchListSuccess = response => ({
  type: SEARCH_SUCCESS,
  response
});

export const hotelSearchListFailed = error => ({
  type: SEARCH_FAILED,
  error
});

export const fetchHotelSearchList = (data) => (dispatch) => {
  dispatch(hotelSearchListRequest());
  console.log(data)
  axiosInstance
    .post('/api/search/', data)
    .then((res) => {
      console.log(res)
      dispatch(hotelSearchListSuccess(res));
    })
    .catch((e) => {
      console.log(e.response)
      dispatch(hotelSearchListFailed(e));
    });
};

// Get Hotel List
export const hotelDetailsRequest = () => ({
  type: DETAILS_REQUEST
});

export const hotelDetailsSuccess = response => ({
  type: DETAILS_SUCCESS,
  response
});

export const hotelDetailsFailed = error => ({
  type: DETAILS_FAILED,
  error
});

export const fetchHotelDetails = (id) => (dispatch) => {
  dispatch(hotelDetailsRequest());
  axiosInstance
    .get('/api/hotellist/' + id + '/')
    .then((res) => {
      console.log(res)
      dispatch(hotelDetailsSuccess(res));
    })
    .catch((e) => {
      console.log(e.response)
      dispatch(hotelDetailsFailed(e));
    });
};

// Add Hotel List
export const hotelAddRequest = () => ({
  type: ADD_REQUEST
});

export const hotelAddSuccess = response => ({
  type: ADD_SUCCESS,
  response
});

export const hotelAddFailed = error => ({
  type: ADD_FAILED,
  error
});

export const fetchHotelAdd = (data) => (dispatch) => {
  dispatch(hotelAddRequest());
  axiosInstance
    .post('/api/hotellist/', data)
    .then((res) => {
      console.log(res)
      dispatch(hotelAddSuccess(res));
    })
    .catch((e) => {
      console.log(e.response)
      dispatch(hotelAddFailed(e));
    });
};



// Reservation
export const reservationRequest = () => ({
  type: RESERVATION_REQUEST
});

export const reservationSuccess = response => ({
  type: RESERVATION_SUCCESS,
  response
});

export const reservationFailed = error => ({
  type: RESERVATION_FAILED,
  error
});

export const fetchReservation = postData => (dispatch) => {
  dispatch(reservationRequest());
  axiosInstance
    .post('api/Requests/', postData)
    .then((res) => {
      console.log(res)
      dispatch(reservationSuccess(res));
    })
    .catch((e) => {
      console.log(e.response)
      dispatch(reservationFailed(e));
    });
};