import styled from "styled-components";

export const Bar = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 8px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
`;

export const Title = styled.p`
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 63.5px 12px;
`;

export const Title2 = styled.p`
  width: 48px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const Feed = styled.div`
  width: 360px;
  height: 640px;
`;

export const Busca = styled.input`
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;
