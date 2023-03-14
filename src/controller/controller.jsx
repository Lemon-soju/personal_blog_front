import axios from "axios";

// const backend = "http://3.35.179.185:8080";
const backend = "http://127.0.0.1:8080";


const signUp = async (data) => {
  const url = backend + "/signup";

  const headers = {
    "Content-Type": "application/json",
  };

  let result;
  console.log(`회원가입 입력값: ${JSON.stringify(data)}`); //debug

  await axios
    .post(url, JSON.stringify(data), { headers })
    .then((response) => {
      console.log(`회원가입 반환값: ${JSON.stringify(response.data)}`); //debug
      result = response;
    })
    .catch((error) => {
      console.log(`회원가입 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

const login = async (data) => {
  const url = backend + "/login";

  const headers = {
    "Content-Type": "application/json",
  };

  let result;
  console.log(`로그인 입력값: ${JSON.stringify(data)}`); //debug

  await axios
    .post(url, JSON.stringify(data), { headers })
    .then((response) => {
      console.log(`로그인 반환값: ${JSON.stringify(response.data)}`); //debug
      result = response;
    })
    .catch((error) => {
      console.log(`로그인 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

const writePost = async (data, accessToken) => {
  const url = backend + "/post/write";

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  console.log("글쓰기 토큰값: " + accessToken);
  let result;
  console.log(`글쓰기 입력값: ${JSON.stringify(data)}`); //debug

  await axios
    .post(url, JSON.stringify(data), { headers })
    .then((response) => {
      console.log(`글쓰기 반환값: ${JSON.stringify(response.data)}`); //debug
      result = response;
    })
    .catch((error) => {
      console.log(`글쓰기 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

const editPost = async (data, accessToken) => {
  const url = backend + `/user/post/edit/${data.id}`;

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  console.log("글수정 토큰값: " + accessToken);
  let result;
  console.log(`글수정 입력값: ${JSON.stringify(data)}`); //debug

  await axios
    .post(url, JSON.stringify(data), { headers })
    .then((response) => {
      console.log(`글쓰기 반환값: ${JSON.stringify(response.data)}`); //debug
      result = response;
    })
    .catch((error) => {
      console.log(`글쓰기 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

const deletePosts = async (data, accessToken) => {
  const url = backend + "/user/post/delete";

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  let result;
  console.log(`글삭제 데이터: ${JSON.stringify(data)}`); //debug

  await axios
    .post(url, JSON.stringify(data), { headers })
    .then((response) => {
      result = response;
    })
    .catch((error) => {
      console.log(`글삭제 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

const readPost = async (data) => {
  const url = backend + "/post/detail";
  let accessToken = localStorage.getItem("accessToken");

  const headers = {
    "Content-Type": "application/json",
    accessToken: accessToken,
  };

  let result;

  await axios
    .get(url + "?id=" + data, { headers })
    .then((response) => {
      // console.log(`글 detail 읽기 반환값: ${JSON.stringify(response.data)}`); //debug
      result = response;
    })
    .catch((error) => {
      console.log(`글 detail 불러오기 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

export { signUp, login, writePost, deletePosts, readPost, editPost };
