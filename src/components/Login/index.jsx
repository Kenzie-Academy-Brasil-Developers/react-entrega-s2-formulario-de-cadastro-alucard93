import {React, useContext} from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledLogin } from "./style";
import Logo from "../../assets/Logo.svg";
import { Container } from "../../styled/global";
import { toast } from "react-toastify";
import { LoginContext } from "../../contexts/LoginContext/LoginContext";
import { AddButtonContext } from "../../contexts/ModalContext/ModalContext";

const Login = () => {

    const navigation = useNavigate();

    const { setUser, setUserId } = useContext(LoginContext)
    const { setRegisterButton } = useContext(AddButtonContext)

  function addData(value) {
    api
      .post("/sessions", value)
      .then((res) => res)
      .then((res) => {
        if (res.data.user) {
          localStorage.setItem("@token", res.data.token);
          localStorage.setItem("@userData", JSON.stringify(res.data.user));
          localStorage.setItem("@userId", res.data.user.id);
          setUserId(res.data.user.id)
          setUser(res.data.user)
          navigation("dashboard");
          toast.success("Login feito com sucesso!");
        } else {
          navigation("/");
        }
      })

      .catch((res) => {
        toast.error("Email ou Senha incorretos");
      });
  }

  function ChangePage() {
    setRegisterButton(true)
    navigation("cadastro");
  }

  const validationUser = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve conter no minímo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationUser),
  });

  return (
    <>
      <Container>
        <StyledLogin>
          <img src={Logo} alt="Logo" />
          <form onSubmit={handleSubmit(addData)}>
            <h2>Login</h2>

            <div className="container__input">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="container__input">
              <label htmlFor="">Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>
            <button className="btn-login">Entrar</button>
            <p className="container__text">Ainda não possui uma conta?</p>
            <button className="btn-register" onClick={ChangePage}>
              Cadastre-se
            </button>
          </form>
        </StyledLogin>
      </Container>
    </>
  );
};

export default Login;
