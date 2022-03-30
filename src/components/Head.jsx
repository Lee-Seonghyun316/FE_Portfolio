import React from 'react';
import styled from 'styled-components';
import MainImg from '../img/main.jpg';

const Head = () => (
  <div>
    <Header>
      <Logo>Erica's Portfolio</Logo>
    </Header>
    <Introduction>
      <Title>
        이성현
        <br />
        Front-End 개발자 포트폴리오
      </Title>
      <Text>
        안녕하세요. <br />
        개발하는 것이 즐겁고, 꾸준히 성장하는 개발자가 되고 싶습니다.
      </Text>
    </Introduction>
  </div>
);

export default Head;

const Header = styled.header``;
const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: 900;
  padding: 1rem;
`;
const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-image: url(${MainImg});
  background-size: cover;
  height: 20rem;
  color: ${({ theme }) => theme.color.white};
  background-color: #0008;
  background-blend-mode: darken;
  text-align: center;
  line-height: ${({ theme }) => theme.fontSize.small};
`;
const Title = styled.h1`
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 900;
  text-align: center;
  line-height: ${({ theme }) => theme.fontSize.xLarge};
`;
const Text = styled.div`
  padding: 0 2rem;
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  font-weight: 600;
`;
