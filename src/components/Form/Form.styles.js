import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 180px;
`;

export const Content = styled.div`
    width: var(--maxWidth);
    margin: 0 auto;
    .form-container {
        margin: 0 300px;
        -webkit-box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
        margin: 0 auto;
        box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
        border-radius: 8px;
        max-width: 540px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input {
            margin: 15px 0;
        }
    }
    button,
    .submit {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: 0.2s ease-in-out all;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
        border: 1px solid #006a31;
        border-radius: 8px;
        background: #006a31;
        width: 100%;
        height: 45px;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        cursor: pointer;
        span {
            font-weight: bold;
        }
    }
    .submit {
        margin-bottom: 50px;
        width: 70%;
    }
    .login-form,
    .register-form,
    .information-form,
    .right {
        padding: 15px 30px 50px;
        text-align: -webkit-left;
        h1 {
            width: 100%;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input {
            width: 100%;
            height: 40px;
            outline: none;
            border: 1px solid #e1e1e1;
            border-radius: 8px;
            background: #fafafa;
            padding: 5px 20px;
        }
        label {
            width: 100%;
            font-weight: bold;
            span {
                color: red;
            }
        }
        select {
            width: 100%;
            height: 40px;
            outline: none;
            border: 1px solid #e1e1e1;
            border-radius: 8px;
            background: #fafafa;
            padding: 5px;
            margin: 10px 0;
        }
        .forgot-password {
            width: 100%;
            font-size: 0.8rem;
            color: #52b5e0;
            cursor: pointer;
        }

        .text {
            width: 100%;
            margin: 8px 0;
            span {
                color: #52b5e0;
                cursor: pointer;
            }
        }
        .error {
            width: 100%;
            color: red;
            margin-bottom: 10px;
        }
        button:hover,
        .submit:hover {
            opacity: 0.7;
        }
    }
    .container {
        min-width: calc(var(--maxWidth) - 100px);
        .top {
            padding: 40px 30px 0px 30px;

            h1 {
                border-bottom: 1px solid lightgray;
                margin: 0;
                padding-bottom: 20px;
            }
        }
    }
    .flex {
        display: flex;
        margin: 0 auto;
        .left {
            flex: 1 1;
        }
        .right {
            flex: 1 1;
        }
    }
`;
