import React from "react";
import {
  BuscarInputContainer,
  Container,
  MenuRight,
  Row,
  Wrapper,
  Input,
  Menu,
  UserPicture,
} from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <span href="#" onClick={handleClickSignIn}>
            <img src={logo} alt="logo da dio" />
          </span>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..."></Input>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>{" "}
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/121954894?v=4" />
          ) : (
            [
              <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>,
            ]
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
