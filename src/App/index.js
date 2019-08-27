import React, { Component } from "react";
import styled from "styled-components";

const JoinWrapper = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    padding: 50px 30px;
    h1 {
        padding-bottom: 50px;
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 30px;
    }
    .joinItem {
        text-align: right;
        margin-bottom: 30px;
    }
    label {
        width: 80px;
        margin-right: 10px;
    }
    input {
        width: 300px;
        border-bottom: 1px solid #aeaeae;
    }
    button {
        display: block;
        margin-top: 30px;
        background-color: #32adbc;
        width: 100%;
        height: 50px;
        border-radius: 3px;
        color: #fff;
        font-weight: bold;
    }
    .skip {
        margin-top: 50px;
        display: block;
        text-align: right;
        font-size: 12px;
        color: #aaa;
        text-decoration: underline;
    }
`;

class App extends Component {
    linkMethod = () => {
        console.log("link!");
    };
    render() {
        const defaultValue = "test";
        return (
            <div style={{ position: "relative", height: "100vh" }}>
                <JoinWrapper className="joinWrapper">
                    <h1>회원가입</h1>
                    <form action="">
                        <div className="joinItem">
                            <label htmlFor="form_id">아이디</label>
                            <input
                                id="form_id"
                                type="text"
                                value={defaultValue}
                            />
                        </div>
                        <div className="joinItem">
                            <label htmlFor="form_pw">비밀번호</label>
                            <input id="form_pw" type="text" />
                        </div>
                        <div className="joinItem">
                            <label htmlFor="form_pwc">비밀번호 확인</label>
                            <input id="form_pwc" type="text" />
                        </div>

                        <button type="button" onMouseEnter={this.linkMethod}>
                            회원가입
                        </button>
                    </form>
                    <span className="skip">둘러보기</span>
                </JoinWrapper>
                {true ? "회원 가입 하시겠습니까?" : "회원가입 안하시겠습니까?"}
            </div>
        );
    }
}

export default App;
