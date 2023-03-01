const toyViewReducer = (state = [], action) => {
  console.log("in toyViewReducer", action.payload);
  switch (action.type) {
    case "SET_TOYS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default toyViewReducer;
