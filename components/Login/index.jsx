import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { GlobalStyle } from "../../src/styles/GlobalStyle";

import * as Style from "./style";

export default function Login({ isCadrastar }) {
  const realizarCadastro = () => {
    isCadrastar(true);
  };

  return (
    <>
      <Style.Login mostrarlogin={isCadrastar}>
        <GlobalStyle/>
        <h1>Login</h1>

        <div className="inputBox">
          <MdAlternateEmail/>
          <input type="email" name="" id="" placeholder="Email" />
        </div>

        <div className="inputBox">
          <FaKey/>
          <input type="password" name="" id="" placeholder="senha" />
        </div>

        <a className="forgot" href="#">Esqueceu a senha?</a>

        <button type="submit">Entrar</button>

        <div>
          <p>Não tem uma conta?</p>
          <button onClick={realizarCadastro}>Cadrastre-se</button>
        </div>
      </Style.Login>
    </>
  );
}
