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
  DETAILS_FAILED
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
  dispatch(hotelDetailsRequest(id));
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