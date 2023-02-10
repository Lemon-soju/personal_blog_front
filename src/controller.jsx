import axios from "axios";

const backend = "http://localhost:8080";

const signUp = async (data) => {
  const url = backend + "/user/signup";

  const headers = {
    "Content-Type": "application/json",
  };

  let result;
  console.log(`회원가입 입력값: ${JSON.stringify(data)}`); //debug

  await axios
    .post(url, JSON.stringify(data), { headers })
    .then((response) => {
      result = JSON.stringify(response.data);
      console.log(`회원가입 반환값: ${result}`); //debug
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
      result = JSON.stringify(response.data);
      console.log(`로그인 반환값: ${result}`); //debug
    })
    .catch((error) => {
      console.log(`로그인 오류: ${error}`); //debug
      result = error;
    });

  return result;
};

export { signUp, login };
