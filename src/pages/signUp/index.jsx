/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header } from "../../components/Header";
import {
  Container,
  Title,
  Column,
  Wrapper,
  TitleLogin,
  SubtitleLogin,
  TermoText,
  LoginText,
} from "./styles";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { cadastrarUsuario } from "../../services/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await cadastrarUsuario({
        name: data.nome,
        email: data.email,
        senha: data.password,
      });
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch {
      alert("Erro ao cadastrar usuário");
    }
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A Plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson />}
                errorMessage={errors.nome && "Nome é obrigatório"}
              />
              <Input
                name="email"
                control={control}
                placeholder="Email"
                leftIcon={<MdEmail />}
                errorMessage={errors.email && "Email é obrigatório"}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors.password && "Senha é obrigatório"}
              />
              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>
            <TermoText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </TermoText>
            <LoginText>
              Já tenho conta.{" "}
              <a href="" onClick={handleClickLogin}>
                Fazer login
              </a>
            </LoginText>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignUp };
