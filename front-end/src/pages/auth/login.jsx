import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import googleLogo from "../../assets/img/google-logo.svg";
import kakaoLogo from "../../assets/img/kakao-logo.svg";
import sign01 from "../../assets/img/sign01.png";
import "../../style/scss/style.scss";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // 입력값 변경 시 formData 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // 로그인 API 호출 로직
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 백엔드 로그인 API 엔드포인트에 formData를 POST 요청으로 전송합니다.
      const response = await axios.post("http://localhost:8586/api/login", formData);

      console.log("로그인 성공:", response.data);
      // 로그인 성공 후 처리 (예: 토큰 저장, 페이지 이동 등)
   
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left-form-container">
        {/* 왼쪽 로그인 폼 영역 */}
        <div className="signup-left">
          {/* 상단 로고 */}
          <div className="favicon">
            <div className="favicon-text">DREAM ON</div>
            <div className="favicon-line">
              <div className="favicon-line-gradient" />
            </div>
          </div>
          <div className="signup-top">
            <div className="signup-title-area">
              <div className="signup-title">로그인</div>
              <div className="signup-subinfo">
                <div className="already">이미 계정이 있으신가요?</div>
                <div className="goto-login" onClick={() => alert("로그인 페이지로 이동")}>
                  로그인 하기
                </div>
              </div>
            </div>
            <div className="signup-form-area">
              <form onSubmit={handleSubmit}>
                {/* 이메일 입력 */}
                <div className="input-wrapper">
                  <label htmlFor="email">이메일</label>
                  <input
                    className="input-email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                {/* 비밀번호 입력 */}
                <div className="input-wrapper password">
                  <label htmlFor="password">비밀번호</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력해주세요"
                  />
                </div>

                {/* 옵션, 비밀번호 찾기 */}
                <div className="options">
                  <div className="remember-me">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div className="forgot-pw" onClick={() => alert("비밀번호 찾기 페이지로 이동")}>
                    <a href="/find-password">비밀번호를 잊으셨나요?</a>
                  </div>
                </div>

                {/* 로그인 버튼 */}
                <button type="submit" className="signup-button">
                  <span>로그인</span>
                </button>
              </form>
            </div>
          </div>
          <div className="other-method">다른 방법으로 로그인</div>
        </div>

        {/* 소셜 로그인 (예: 카카오, 구글) */}
        <div className="social-login">
          <img
            src={kakaoLogo}
            alt="카카오로 로그인하기"
            onClick={() => alert("카카오 로그인")}
          />
          <img
            src={googleLogo}
            alt="구글로 로그인하기"
            onClick={() => alert("구글 로그인")}
          />
        </div>
      </div>

      {/* 오른쪽 이미지 및 텍스트 영역 */}
      <div className="signup-right-img-container">
        <img className="signup-img" src={sign01} alt="웃는 아이의 이미지" />
        <div className="signup-right-text1">
          <div className="big-title">작은 손길, 큰 변화</div>
          <div className="small-title">희망을 선물하는 가장 쉬운 방법</div>
        </div>
        <div className="signup-right-subtitle">드림온 프로젝트</div>
      </div>
    </div>
  );
}

export default Login;
