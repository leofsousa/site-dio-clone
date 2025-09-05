import React from "react";
import {
  BuscarInputContainer,
  Container,
  MenuRight,
  Row,
  Wrapper,
  Input,
  Menu,
} from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo da dio" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..."></Input>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
