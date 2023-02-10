import axios from "axios";

const backend = "http://localhost:8080";

async function signUp(data) {
  const url = backend + "/user/signup";

  const headers = {
    "Content-Type": "application/json",
  };

  let result;
  console.log(`회원가입 입력값: ${JSON.stringify(data)}`); //debug

  axios
    .post(url, JSON.stringify(data), { headers })
    .then(function (response) {
      console.log(`회원가입 반환값: ${response.data}`); //debug
      result = response.data;
    })
    .catch(function (error) {
      console.log(`회원가입 오류: ${error}`); //debug
      result = error;
    });

  return result;
}

export { signUp };
