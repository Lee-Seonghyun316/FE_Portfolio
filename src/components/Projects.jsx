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
import AutoComplete from '../img/component/autoComplete.png';
import ClickToEdit from '../img/component/clickToAdit.png';
import Modal from '../img/component/modal.png';
import Tabs from '../img/component/tabs.png';
import Tag from '../img/component/tag.png';
import Toggle from '../img/component/toggle.png';

ChartJS.register(ArcElement, Tooltip, Legend);

SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const switiData = {
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
  const componentData = {
    labels: ['Me'],
    datasets: [
      {
        label: '# of Votes',
        data: [100],
        backgroundColor: ['rgba(66, 66, 66, 0.4)'],
        borderColor: ['rgba(66, 66, 66, 1)'],
        borderWidth: 1,
      },
    ],
  };
  const keeperData = {
    labels: ['Me', 'TeamMembers'],
    datasets: [
      {
        label: '# of Votes',
        data: [38, 2],
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
        <SwiperContainer>
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
        </SwiperContainer>
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
              <Doughnut data={switiData} />
            </Chart>
          </Content>
        </ContentContainer>
      </Project>
      <Project>
        <ProjectTitle>프론트엔드 컴포넌트 6가지</ProjectTitle>
        <Date>2022.02</Date>
        <Swiper className="banner" spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
          <SwiperSlide>
            <Img src={Toggle} alt="toggle" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Modal} alt="modal" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Tabs} alt="tabs" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={Tag} alt="tag" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={AutoComplete} alt="autoComplete" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={ClickToEdit} alt="clickToEdit" />
          </SwiperSlide>
        </Swiper>
        <Description>
          <StackTitle>
            <FontAwesomeIcon icon={faClipboard} /> Description
          </StackTitle>
          <Strong>
            React에서 프론트엔드에서 자주 사용하는 컴포넌트 6가지(Toggle, Modal, Tab, Tag, AutoComplete, ClickToEdit)를
            구현하였습니다.
          </Strong>
        </Description>
        <ContentContainer>
          <Content>
            <StackTitle>
              <FontAwesomeIcon icon={faUserGroup} />
              역할
            </StackTitle>
            <Stack>
              <Item>토글 버튼: 가상요소 이용, checkbox custom</Item>
              <Item>모달: 웹 접근성 고려</Item>
              <Item>탭 구현</Item>
              <Item>태그 구현: 성능최적화, Form event handing</Item>
              <Item>자동 완성: 서은최적화, 불변성 유지</Item>
              <Item>클릭 후 편집: controlled input</Item>
            </Stack>
            <StackTitle>
              <FontAwesomeIcon icon={faWrench} /> 기술스택
            </StackTitle>
            <Stack>
              <Item>JavaScript</Item>
              <Item>React</Item>
              <Item>styled-components</Item>
              <Item>storybook</Item>
              <Item>prop-types</Item>
            </Stack>
            <StackTitle>
              <FontAwesomeIcon icon={faWrench} /> 참고링크
            </StackTitle>
            <Stack>
              <Item>
                <Link href="https://github.com/Lee-Seonghyun316/wanted_pre_onboarding">GitHub</Link>
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
                100%
                <br />
                (github commits 기준)
              </Item>
            </Stack>
            <Chart>
              <Doughnut data={componentData} />
            </Chart>
          </Content>
        </ContentContainer>
      </Project>
      <Project>
        <ProjectTitle>택배 운송장 정보 보호 웹</ProjectTitle>
        <Date>2021.12</Date>
        <Description>
          <StackTitle>
            <FontAwesomeIcon icon={faClipboard} /> Description
          </StackTitle>
          <Strong>
            개인정보 보호를 위해 운송장 정보를 암호화한 후 QR 로 제공하는 앱. 택배 기사인 경우 QR 인식을 통해 정보 확인
            가능.
          </Strong>
          <br />
          2021 겨울 Energize Dongguk 융합 페어 Farm 경진대회 - 최우수상(동국대학교 융합교육원, 대학혁신지원사업단)
        </Description>
        <ContentContainer>
          <Content>
            <StackTitle>
              <FontAwesomeIcon icon={faUserGroup} />
              역할
            </StackTitle>
            <Stack>
              <Item>프론트엔드 기술환경 구성 및 기본 기능 구현</Item>
              <Item>google, github 로그인/로그아웃</Item>
              <Item>firebase DB 연결, 저장, 데이터 조회</Item>
              <Item>QR 코드 생성, 스캔</Item>
              <Item>crypto-js를 이용한 client 정보 암호화</Item>
              <Item>기획/플로우차트 작성</Item>
            </Stack>
            <StackTitle>
              <FontAwesomeIcon icon={faWrench} /> 기술스택
            </StackTitle>
            <Stack>
              <Item>JavaScript</Item>
              <Item>React</Item>
              <Item>PostCSS</Item>
              <Item>React-router</Item>
              <Item>firebase Authentication, realtime DB</Item>
              <Item>Crypto-js</Item>
              <Item>AWS Lambda</Item>
            </Stack>
            <StackTitle>
              <FontAwesomeIcon icon={faWrench} /> 참고링크
            </StackTitle>
            <Stack>
              <Item>
                <Link href="https://github.com/Lee-Seonghyun316/wanted_pre_onboarding">GitHub</Link>
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
                {Math.round((38 / (38 + 2)) * 10000) / 100}%
                <br />
                (github commits 기준)
              </Item>
            </Stack>
            <Chart>
              <Doughnut data={keeperData} />
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
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 0;
  }
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
const SwiperContainer = styled.div`
  max-width: 100%;
`;
const Project = styled.div`
  max-width: 50rem;
  width: 90%;
  padding: 2rem;
  border-bottom: 1px solid grey;
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
