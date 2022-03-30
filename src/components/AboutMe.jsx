import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faPhone, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const AboutMe = () => (
  <Wrap>
    <Title>ABOUT ME</Title>
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
const Title = styled.h1`
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 900;
  text-align: center;
  line-height: ${({ theme }) => theme.fontSize.xLarge};
`;
const Content = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
`;
const TextItem = styled.li`
  display: flex;
  text-align: left;
  width: 40%;
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
