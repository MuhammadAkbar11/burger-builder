import FeedBackActionsHandler from "../actions/handlers/feedback";
import { FeedBackActionTypes } from "../actions/types";

const initialState = {
  alert: {
    show: false,
    type: "success",
    title: "Success",
    subTitle: "Your order was successful",
  },
  isLoading: false,
};

const { showAlert, hideAlert } = FeedBackActionsHandler;

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
