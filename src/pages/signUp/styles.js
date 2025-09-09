import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  font-family: "Open Sans";
  width: 320px;
  line-height: 44px;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex-direction: column;
`;
export const Row = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLogin = styled.h3`
  font-family: "Open Sans";
  width: 320px;
  line-height: 44px;
  font-size: 32px;
  font-weight: 700;
  font-style: bold;
  margin-bottom: 20px;
`;

export const SubtitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;
