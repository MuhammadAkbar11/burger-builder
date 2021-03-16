import { feedBackReducerHandler } from "./handlers";
import { FeedBackActionTypes } from "../actions/actionsTypes";

const initialState = {
  alert: {
    show: false,
    type: "success",
    title: "Success",
    subTitle: "Your order was successful",
  },
  isLoading: false,
};

const { showAlert, hideAlert } = feedBackReducerHandler;

const FeedBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FeedBackActionTypes.SHOW_ALERT:
      return showAlert(state, action.payload);
    case FeedBackActionTypes.HIDE_ALERT:
      return hideAlert(state);
    default:
      break;
  }
};

export default FeedBackReducer;
