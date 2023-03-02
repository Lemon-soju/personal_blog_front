let initialState = {
  postData: [],
};

const homeReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        postData: payload.postData,
      };
    default:
      return { ...state };
  }
};

export default homeReducer;
