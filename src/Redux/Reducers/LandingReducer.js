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
  SEARCH_FAILED
} from '../Constants/ActionType';
import initialState from '../Constants/InitialState';

export default (state = initialState, action) => {
  switch (action.type) {

    // Hotel List
    case HOTEL_LIST_REQUEST:
      return {
          ...state,
          hotelList:{
            loading: true,
            success: false,
            failed: false,
            data: []
          }
      };
    case HOTEL_LIST_SUCCESS:
      console.log(action)
      return {
        ...state,
        hotelList:{
          loading: false,
          success: true,
          failed: false,
          data: action.response.data
        }
      };
    case HOTEL_LIST_FAILED:
      return {
        ...state,
        hotelList:{
          loading: false,
          success: false,
          failed: true,
          data: [...state.hotelList]
        }
      };

    // Hotel Search List
    case SEARCH_REQUEST:
    return {
        ...state,
        searchList:{
          loading: true,
          success: false,
          failed: false,
          data: []
        }
    };
    case SEARCH_SUCCESS:
      console.log(action)
      return {
        ...state,
        searchList:{
          loading: false,
          success: true,
          failed: false,
          data: action.response.data
        }
      };
    case SEARCH_FAILED:
      return {
        ...state,
        searchList:{
          loading: false,
          success: false,
          failed: true,
          data: []
        }
      };

    // Hotel Detais
    case DETAILS_REQUEST:
    return {
        ...state,
        details:{
          loading: true,
          success: false,
          failed: false,
          data: {}
        }
    };
    case DETAILS_SUCCESS:
      console.log(action)
      return {
        ...state,
        details:{
          loading: false,
          success: true,
          failed: false,
          data: action.response.data
        }
      };
    case DETAILS_FAILED:
      return {
        ...state,
        details:{
          loading: false,
          success: false,
          failed: true,
          data: {}
        }
      };

    // Reservation
    case RESERVATION_REQUEST:
      return {
          ...state,
          reservation:{
            loading: true,
            success: false,
            failed: false
          }
      };
    case RESERVATION_SUCCESS:
      return {
        ...state,
        reservation:{
          loading: false,
          success: true,
          failed: false
        }
      };
    case RESERVATION_FAILED:
      return {
        ...state,
          reservation:{
          loading: false,
          success: false,
          failed: true
        }
      };
    default:
      return state;
  }
};