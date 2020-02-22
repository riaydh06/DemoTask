import { axiosInstance } from '../../Config';
import { 
  RESERVATION_REQUEST, 
  RESERVATION_SUCCESS, 
  RESERVATION_FAILED 
} from '../Constants/ActionTypes';

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