const FeedBackReducerHandler = {
  showAlert: (state, payload) => {
    return { ...state };
  },
  hideAlert: state => {
    return {
      ...state,
      alert: {
        show: false,
        ...state.alert,
      },
    };
  },
};

export default FeedBackReducerHandler;
