const appReducerHandler = {
  openDrawer: (state, payload) => {
    return {
      ...state,
      isOpenDrawer: true,
    };
  },
  closeDrawer: state => {
    return {
      ...state,
      isOpenDrawer: false,
    };
  },
};

export default appReducerHandler;
