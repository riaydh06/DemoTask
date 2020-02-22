import { 
  RESERVATION_REQUEST, 
  RESERVATION_SUCCESS, 
  RESERVATION_FAILED 
} from '../Constants/ActionType';
import initialState from '../Constants/InitialState';

export default (state = initialState.reservation, action) => {
  switch (action.type) {
    case RESERVATION_REQUEST:
      return {
          loading: true,
          success: false,
          failed: false
      };
    case RESERVATION_SUCCESS:
      return {
          loading: false,
          success: true,
          failed: false
      };
    case RESERVATION_FAILED:
      return {
          loading: false,
          success: false,
          failed: true
      };
    default:
      return state;
  }
};