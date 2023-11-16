import axios, { AxiosResponse } from "axios";

const backend = process.env.REACT_APP_BASE_URL;

const signUp = async (data: { uid: string; pwd: string; name: string }) => {
  const url = backend + "/signup";
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(url, JSON.stringify(data), { headers });
  return response;
};

interface LoginResponse {
  accessToken: string;
  uid: string;
}

const login = async (data: {
  uid: string;
  pwd: string;
}): Promise<AxiosResponse<LoginResponse>> => {
  const url = backend + "/login";
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(url, JSON.stringify(data), { headers });
  return response;
};

const refreshToken = async (
  accessToken: string | null
): Promise<AxiosResponse<LoginResponse>> => {
  const url = backend + "/auth/refreshToken";
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };
  const response = await axios.get(url, { headers });
  return response;
};

const writePost = async (
  data: { title: string; content: any },
  accessToken: string | null
) => {
  const url = backend + "/auth/post";
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };
  try {
    const response = await axios.post(url, JSON.stringify(data), { headers });
    return response;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      const { status, message } = error.response;
      const loginUrl = "/login";
      return { message, loginUrl, status };
    } else {
      return Promise.reject(error);
    }
  }
};

const editPost = async (
  data: { id: any; title?: string; content?: string },
  accessToken: string | null
) => {
  const url = backend + `/auth/post/${data.id}`;
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };
  try {
    const response = await axios.patch(
      url,
      JSON.stringify({ title: data.title, content: data.content }),
      { headers }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deletePosts = async (
  data: { checkedInputs: number[] },
  accessToken: string | null
): Promise<AxiosResponse> => {
  const url = backend + "/auth/post/delete";
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };
  const response = await axios.post(url, JSON.stringify(data), { headers });
  return response;
};

const readPost = async (data: string): Promise<AxiosResponse> => {
  const url = backend + "/post/" + data;
  let accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };
  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

const readAllPosts = async (
  page: number,
  count: number,
  accessToken?: string | null,
  search?: string | null
): Promise<AxiosResponse> => {
  const url = backend + "/post";
  try {
    const response = await axios.get(url, {
      params: {
        search,
        page,
        count,
      },
      headers: accessToken ? { accessToken } : {},
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const readAllPostsManage = async (
  page: number,
  count: number,
  accessToken?: string | null,
  search?: string | null
): Promise<AxiosResponse> => {
  const url = backend + "/auth/post/manage";
  try {
    const response = await axios.get(url, {
      params: {
        search,
        page,
        count,
      },
      headers: accessToken ? { accessToken } : {},
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const createLike = async (data: number): Promise<AxiosResponse> => {
  const url = backend + "/like/post/" + data;
  let accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };
  try {
    const response = await axios.post(url, null, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteLike = async (data: number): Promise<AxiosResponse> => {
  const url = backend + "/like/post/" + data;
  let accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  try {
    const response = await axios.delete(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  signUp,
  login,
  writePost,
  deletePosts,
  readPost,
  editPost,
  refreshToken,
  createLike,
  deleteLike,
  readAllPosts,
  readAllPostsManage,
};
