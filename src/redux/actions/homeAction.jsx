import homeApi from "../api/homeApi";

const getPosts = () => {
  return async (dispatch) => {
    try {
      const postApi = await homeApi.get(`/post`);
      dispatch({
        type: "GET_POSTS_SUCCESS",
        payload: {
          postData: postApi.data,
        },
      });
    } catch (error) {
      console.log("getPosts Action error", error);
    }
  };
};

export const homeAction = {
  getPosts,
};
