import React from "react";
import { Header } from "../../components/Header";
import {
  Container,
  Title,
  Column,
  Row,
  Wrapper,
  TitleLogin,
  SubtitleLogin,
} from "./styles";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { cadastrarUsuario } from "../../services/api";

const SignUp = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const newUser = await cadastrarUsuario({
        nome: data.nome,
        email: data.email,
        senha: data.password,
      });
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
              />
              <Input
                name="email"
                control={control}
                placeholder="Email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Cadastrar"
                variant="secondary"
                type="submit"
              ></Button>
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignUp };
