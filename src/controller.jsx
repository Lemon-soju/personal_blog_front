import axios from "axios";

const backend = "http://localhost:8080";

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
  const url = backend + "/user/post";

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

export { signUp, login, writePost };
