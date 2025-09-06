import React from "react";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";
import bgdio from '../../assets/bgdio.png';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={bgdio}/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/121954894?v=4" />
          <div>
            <h4>Leonardo Sousa</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto par curso de HTML e CSS</h4>
          <p>
            Projeto feito para o curso de html e css no bootcamp dio Global
            Avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JAVASCRIPT</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
