import React from 'react';
import styled from 'styled-components';
import MainImg from '../img/main.jpg';

const Head = () => (
  <div>
    <Header>
      <Logo>Erica's Portfolio</Logo>
      <Nav>
        <NavItem>
          <Link href="#skills">스킬</Link>
        </NavItem>
        <NavItem>
          <Link href="#career">경력</Link>
        </NavItem>
        <NavItem>
          <Link href="#project">프로젝트</Link>
        </NavItem>
      </Nav>
    </Header>
    <Introduction>
      <Title>
        이성현
        <br />
        Front-End 개발자 포트폴리오
      </Title>
      <Text>
        안녕하세요. 주어진 일을 책임감을 가지고 끝까지 마무리하는 것이 저의 장점이며, <br />
        같이 일하고 싶은 개발자가 되기 위해 노력하고 있습니다.
      </Text>
    </Introduction>
  </div>
);

export default Head;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
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
const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  max-width: 20rem;
  padding-right: 1rem;
  gap: 1rem;
`;
const NavItem = styled.li``;
const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.color.purple};
  }
`;
