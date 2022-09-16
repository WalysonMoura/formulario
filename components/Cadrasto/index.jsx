import { MdAlternateEmail } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import { BsGithub, BsFacebook, BsGoogle } from "react-icons/bs";

import { GlobalStyle } from "../../src/styles/GlobalStyle";
import api from "../../src/services/api";
import * as Style from "./style";
import { useState } from "react";

export default function Cadrasto({ isCadrastar }) {
  const realizarLogin = () => {
    isCadrastar(false);
  };

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const enviarDados = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("contato", {nome,email,senha});
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Style.Cadrasto onSubmit={enviarDados} login={isCadrastar}>
        <GlobalStyle />
        <h1>Criar uma conta</h1>

        <div className="inputBox">
          <BiUser />
          <input
            type="text"
            name=""
            id=""
            placeholder="Nome de usuário"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <MdAlternateEmail />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaKey />
          <input
            type="password"
            name=""
            id=""
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit">Cadrastre-se</button>

        <div>
          <p>Já tem uma conta ?</p>
          <button onClick={realizarLogin}>Entrar</button>
        </div>

        <div className="social">
          <BsFacebook size={25} />
          <BsGithub size={25} />
          <BsGoogle size={25} />
        </div>
      </Style.Cadrasto>
    </>
  );
}
