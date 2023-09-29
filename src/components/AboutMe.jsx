import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faPhone, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Title from './common/Title';

const AboutMe = () => (
  <Wrap id='ABOUT-ME'>
    <Title text="ABOUT ME" />
    <Content>
      <TextItem>
        <FontAwesomeIcon icon={faUserLarge} />
        <Text>
          <TextTitle>이름</TextTitle>
          이성현
        </Text>
      </TextItem>
      <TextItem>
        <FontAwesomeIcon icon={faCalendar} />
        <Text>
          <TextTitle>생년월일</TextTitle>
          00.03.16
        </Text>
      </TextItem>
      <TextItem>
        <FontAwesomeIcon icon={faPhone} />
        <Text>
          <TextTitle>연락처</TextTitle>
          010-5896-8050
        </Text>
      </TextItem>
      <TextItem>
        <FontAwesomeIcon icon={faEnvelope} />{' '}
        <Text>
          <TextTitle>이메일</TextTitle>
          mn031621019@gmail.com
        </Text>
      </TextItem>
    </Content>
  </Wrap>
);

export default AboutMe;

const Wrap = styled.section`
  padding: 2rem 1rem;
`;
const Content = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
  max-width: 40rem;
  margin: auto;
`;
const TextItem = styled.li`
  display: flex;
  text-align: left;
  width: 15rem;
  padding: 0 0 2rem 2rem;
`;
const TextTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: 700;
  padding-bottom: 0.5rem;
`;
const Text = styled.div`
  padding: 0 2rem;
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  font-weight: 600;
`;
