import styled from "styled-components";

export const Login = styled.form`
 
  
  width: 100%;
  padding: 2rem 1rem;
  position: absolute;
  background-color: #f2f2f2;
  display: ${({ isCadrastar }) => (isCadrastar ? "none" : "block")};

  font-family: inherit;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  animation: 0.4s;
  animation-name: animation-login;

  @keyframes animation-login {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .inputBox {
    padding: 1.125rem 1rem;
    margin-top: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;

    display: grid;
    grid-template-columns: max-content 1fr;

    > svg {
      font-size: 1.5rem;
      margin-right: .5rem;
      color: #9d4bff;
    }

    input {
      border: none;
      outline: none;
      font-size: 0.938rem;
      font-weight: 700;
      color: #23004d;

      ::placeholder {
        font-size: 0.938rem;
        font-family: inherit;
        color: #a49eac;
      }
    }
  }
  .forgot {
    display: block;
    width: max-content;
    margin-left: auto;
    margin-top: 0.5rem;
    font-size: 0.813rem;
    font-weight: 600;
    color: #a49eac;
  }

  button {
    border: none;
    outline: none;
  }

  button[type="submit"] {
    width: 100%;
    padding: 15px 25px;
    margin-top: 2rem;
    border-radius: 15px;
    color: #fff;
    z-index: 1;
    background: #9d4bff;
    position: relative;
    font-weight: 600;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 0.3s;
    overflow: hidden;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border-radius: 15px;
      background-color: #23004d;
      z-index: -1;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
    }

    :hover {
      color: #e8e8e8;
    }

    :hover::before {
      width: 100%;
    }
  }
  div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p,
    button {
      font-weight: 600;
      font-size: 0.813rem;
      font-family: inherit;
    }

    p {
      color: #23004D;
    }
    button {
      color:#9D4BFF;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1024px){
    left: -11rem;
    bottom: -2rem;
  }
`;
