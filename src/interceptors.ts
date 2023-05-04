import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
    return Promise.reject(error);
  }
);
