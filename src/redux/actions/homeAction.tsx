import homeApi from "../api/homeApi";

const getPosts: any = (search: string) => {
  return async (dispatch: any) => {
    try {
      const postApi = await homeApi.get(`/post`, {
        params: {
          search,
        },
      });
      dispatch({
        type: "GET_POSTS_SUCCESS",
        payload: {
          postData: postApi.data.reverse(),
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
