import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo/";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
         <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome="Leonardo Sousa"
            image="https://avatars.githubusercontent.com/u/121954894?v=4"
          />
                    <UserInfo
            percentual={100}
            nome="Leonardo Sousa"
            image="https://avatars.githubusercontent.com/u/121954894?v=4"
          />
                    <UserInfo
            percentual={10}
            nome="Leonardo Sousa"
            image="https://avatars.githubusercontent.com/u/121954894?v=4"
          />
                    <UserInfo
            percentual={50}
            nome="Leonardo Sousa"
            image="https://avatars.githubusercontent.com/u/121954894?v=4"
          />
                    <UserInfo
            percentual={25}
            nome="Leonardo Sousa"
            image="https://avatars.githubusercontent.com/u/121954894?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
