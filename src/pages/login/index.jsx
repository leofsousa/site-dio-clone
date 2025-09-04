import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {
  Container,
  Column,
  CriarText,
  EsqueciText,
  Row,
  Title,
  TitleLogin,
  Wrapper,
  SubtitleLogin,
} from "./styles";
import { Input } from "../../components/Input";

const Login = () => {
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
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="Email" leftIcon={<MdEmail/>} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Entrar" variant="secondary"></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
