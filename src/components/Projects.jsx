import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Switi1 from '../img/switi/switi_1.jpeg';
import Switi2 from '../img/switi/switi_2.jpeg';
import Switi3 from '../img/switi/switi_3.jpeg';
import Switi4 from '../img/switi/switi_4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faTheaterMasks, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Title from './common/Title';
import Left from '../img/angle-left-solid.svg';
import Right from '../img/angle-right-solid.svg';

ChartJS.register(ArcElement, Tooltip, Legend);

SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const data = {
    labels: ['Me', 'TeamMembers'],
    datasets: [
      {
        label: '# of Votes',
        data: [322, 386],
        backgroundColor: ['rgba(66, 66, 66, 0.4)', 'rgba(158, 158, 158, 0.2)'],
        borderColor: ['rgba(66, 66, 66, 1)', 'rgba(158, 158, 158, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Wrap>
      <Title text="PROJECTS" />
      <Project>
        <ProjectTitle>SWITI 앱</ProjectTitle>
        <Date>2021.03-2021.12</Date>
        <Swiper className="banner" spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
          <SwiperSlide>
            <Img src={Switi1} alt="switi1" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Switi2} alt="switi2" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Switi3} alt="switi3" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Switi4} alt="switi4" />
          </SwiperSlide>
        </Swiper>
        <Description>
          <StackTitle>
            <FontAwesomeIcon icon={faClipboard} /> Description
          </StackTitle>
          <Strong>
            유저가 직접 모임을 생성, 팀원을 모집하고 여러 모임에 참여할 수 있는 모바일 앱 switi 를 개발하였습니다.{' '}
          </Strong>
          고양시 청소년재단 등 여러 단체에서 진행하는 클레스 및 스터디 등을 모집하고 관리할 수 있으며 모임 종료 후 각
          팀원들을 상호 평가할 수 있는 기능이 있습니다. 대회 참가를 위해 진행한 사이드 프로젝트이며 약 1년간 기획 및
          프론트엔드를 맡아 개발했습니다.
          <br />
          <Strong>2021 이루어 Dream 공모전 - 우수상 (고양시청소년재단)</Strong>
        </Description>
        <ContentContainer>
          <Content>
            <StackTitle>
              <FontAwesomeIcon icon={faUserGroup} />
              역할
            </StackTitle>
            <Stack>
              <Item>프론트엔드 기술환경 구성 및 기본 기능 구현</Item>
              <Item>React 기반 컴포넌트 계층 구조 디자인</Item>
              <Item>DB 구조 설계</Item>
              <Item>다양한 기기 사이즈 대응</Item>
              <Item>API 연동</Item>
              <Item>안드로이드 플레이스토어 배포</Item>
            </Stack>
            <StackTitle>
              <FontAwesomeIcon icon={faWrench} /> 기술스택
            </StackTitle>
            <Stack>
              <Item>TypeScript</Item>
              <Item>React-Native</Item>
              <Item>styled-components</Item>
              <Item>redux</Item>
              <Item>GoogleCloudPlatform</Item>
            </Stack>
            <StackTitle>
              <FontAwesomeIcon icon={faWrench} /> 참고링크
            </StackTitle>
            <Stack>
              <Item>
                <Link href="https://github.com/purplecode-team/switi_app">GitHub</Link>
              </Item>
              <Item>
                <Link href="https://play.google.com/store/apps/details?id=com.switi.purpleconrshshyn">PlayStore</Link>
              </Item>
            </Stack>
          </Content>
          <Content>
            <StackTitle>
              <FontAwesomeIcon icon={faTheaterMasks} />
              참여율
            </StackTitle>
            <Stack>
              <Item>
                {Math.round((322 / (386 + 322)) * 10000) / 100}%<br />
                (github commits 기준)
              </Item>
            </Stack>
            <Chart>
              <Doughnut data={data} />
            </Chart>
          </Content>
        </ContentContainer>
      </Project>
    </Wrap>
  );
};

export default Projects;

const Wrap = styled.section`
  --swiper-theme-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .swiper-button-next {
    background: url(${Right}) no-repeat center;
  }
  .swiper-button-prev {
    background: url(${Left}) no-repeat center;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;
const ProjectTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: 900;
  text-align: center;
`;
const Date = styled.p`
  padding: 1rem;
  text-align: center;
  color: grey;
  font-weight: 600;
`;
const Project = styled.div`
  max-width: 50rem;
  padding: 2rem;
`;
const Img = styled.img`
  padding: 0 5%;
  max-width: 90%;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const Description = styled.div`
  padding: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  line-height: ${({ theme }) => theme.fontSize.xSmall};
`;
const Strong = styled.span`
  font-weight: bold;
`;
const StackTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: 600;
  padding: 1rem 0;
`;
const Stack = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  font-weight: 500;
  line-height: ${({ theme }) => theme.fontSize.xSmall};
  list-style: square;
  padding-left: 1rem;
  margin-bottom: 2rem;
`;
const Item = styled.li``;
const Chart = styled.div`
  max-width: 65%;
`;
const Link = styled.a`
  color: grey;
  font-weight: 600;
`;
