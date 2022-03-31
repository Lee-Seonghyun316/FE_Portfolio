import React from 'react';
import FrontendImg from '../img/frontend.png';
import MobileApp from '../img/mobile-app.png';
import Deployment from '../img/deployment.png';
import VersionControl from '../img/version-control.png';
import Communication from '../img/communication.png';
import styled from 'styled-components';
import Title from './common/Title';

const Skills = () => (
  <Wrap id="skills">
    <Title text="SKILLS" />
    <Content>
      <CardContainer>
        <CardItem>
          <CardTitle>Frontend</CardTitle>
          <CardImg src={FrontendImg} alt="front-end" />
        </CardItem>
        <CardItem>
          <CardTitle>Mobile App</CardTitle>
          <CardImg src={MobileApp} alt="mobile-app" />
        </CardItem>
      </CardContainer>
      <CardContainer>
        <CardItem>
          <CardTitle>Deployment</CardTitle>
          <CardImg src={Deployment} alt="deployment-app" />
        </CardItem>
        <CardItem>
          <CardTitle>Version Control</CardTitle>
          <CardImg src={VersionControl} alt="version-control" />
        </CardItem>
        <CardItem>
          <CardTitle>Design</CardTitle>
          <CardImg src={Communication} alt="communication" />
        </CardItem>
      </CardContainer>
    </Content>
  </Wrap>
);

export default Skills;

const Wrap = styled.section`
  background-color: lightgray;
  padding: 2rem 1rem;
`;
const Content = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 3rem;
  max-width: 50rem;
  margin: auto;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
`;
const CardItem = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  -webkit-box-shadow: 5px 5px 15px 5px #747474;
  box-shadow: 5px 5px 15px 5px #747474;
  :hover {
    transform: translateY(-0.5rem);
  }
`;
const CardTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: 700;
  text-decoration: underline;
  text-underline-position: under;
  padding: 0.5rem 0 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
  }
`;
const CardImg = styled.img`
  max-width: 100%;
`;
