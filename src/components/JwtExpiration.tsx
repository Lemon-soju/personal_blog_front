import "bootstrap/dist/css/bootstrap-utilities.css";
import App from "./../App";
import ScrollToTop from "./../utils/ScrollToTop";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { refreshToken } from "../controller/controller";

const JwtExpiration = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleTokenExpiration = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken: any = jwt_decode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("uid");
        window.alert("로그인 세션이 만료되었습니다.");
        navigate("/login");
      } else {
        const refreshThreshold = decodedToken.exp - 60 * 10; // 10분 이전에 refresh token 갱신

        if (Date.now() > refreshThreshold * 1000) {
          try {
            const response: any = await refreshToken(token);
            const newToken = response.data.accessToken;
            if (response.status === 200) {
              localStorage.setItem("accessToken", newToken);
            } else {
              localStorage.removeItem("accessToken");
              window.alert("로그인 세션이 만료되었습니다.");
              localStorage.removeItem("uid");
              navigate("/login");
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
  };

  useEffect(() => {
    handleTokenExpiration();
  }, [navigate, handleTokenExpiration]);

  return (
    <>
      <ScrollToTop />
      <App />
    </>
  );
};
export default JwtExpiration;
