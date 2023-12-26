import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = inputs;
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //========onchange==================================
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  //========onsubmit==================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("Loading...");

    alert("환영합니다");
    navigate(`/`);
  };

  return (
    <LoginContainer>
      <div>로그인</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>아이디</div>
          <input
            type="text"
            value={id}
            onChange={onChange}
            name="id"
            //e.target.value는 input값
          />
          <br />
          <div>비밀번호</div>
          <input type="password" value={pw} onChange={onChange} name="pw" />
          <br />
          <br />

          <Submit type="submit" value="로그인" disabled={loading} />
        </form>
        <Submit type="submit" value="회원가입" disabled={loading} />
        <div>{msg}</div>
      </div>
    </LoginContainer>
  );
}

//======================css==============================

const LoginContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 30%;
  width: 500px;
  align-items: center;
  div {
    position: relative;

    &:first-child {
      font-size: 30px;
    }
    &:nth-child(2) {
      margin: 20px;
      div {
        font-size: 15px;
        text-align: left;
        margin: 5px 0px;
        font-weight: bold;
      }
      input {
        width: 100%;
        height: 40px;

        border-style: solid;
        border-radius: 10px;
        border-color: rgb(179, 176, 176);
        &:nth-child(3) {
          background-color: black;
          border-radius: 20px;
        }
      }
    }
  }
`;

const Submit = styled.input`
  background-color: black;
  border-radius: 30px;
  border: 0;
  color: white;
  cursor: pointer;
`;
