import React from "react";
import { Header } from "../../components/Header";
import { Container, Title, Column, Row, Wrapper, TitleLogin, SubtitleLogin } from "./styles";
import { Input } from "../../components/Header/styles";
import { Button } from "../../components/Button";

const SignUp = () => {
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
                <Input name="nome" title="nome" placeholder="nome"/>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Button title='Cadastrar'></Button>
            </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignUp };
