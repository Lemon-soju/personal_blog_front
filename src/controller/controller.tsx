import axios, { AxiosResponse } from "axios";

const backend = "http://3.35.179.185:8080";
// const backend = "http://127.0.0.1:8080";

const signUp = async (data: { uid: string; pwd: string; name: string }) => {
  const url = backend + "/signup";

  const headers = {
    "Content-Type": "application/json",
  };

  console.log(`회원가입 입력값: ${JSON.stringify(data)}`); //debug

  const response = await axios.post(url, JSON.stringify(data), { headers });
  console.log(`회원가입 반환값: ${JSON.stringify(response.data)}`); //debug

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

  console.log(`로그인 입력값: ${JSON.stringify(data)}`); //debug
  const response = await axios.post(url, JSON.stringify(data), { headers });
  console.log(`로그인 반환값: ${JSON.stringify(response.data)}`); //debug

  return response;
};

const writePost = async (
  data: { title: string; content: string },
  accessToken: string | null
) => {
  const url = backend + "/post/write";

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
  const url = backend + `/member/post/edit/${data.id}`;

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  try {
    const response = await axios.post(url, JSON.stringify(data), { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

const deletePosts = async (
  data: { checkedInputs: number[] },
  accessToken: string | null
): Promise<AxiosResponse> => {
  const url = backend + "/member/post/delete";

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  console.log(`글삭제 데이터: ${JSON.stringify(data)}`); //debug
  const response = await axios.post(url, JSON.stringify(data), { headers });

  return response;
};

const readPost = async (data: string): Promise<AxiosResponse> => {
  const url = backend + "/post/detail";
  let accessToken = localStorage.getItem("accessToken");

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  try {
    const response = await axios.get(url + "?id=" + data, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export { signUp, login, writePost, deletePosts, readPost, editPost };
