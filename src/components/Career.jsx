import React from 'react';
import styled from 'styled-components';
import Title from './common/Title';
import Mangnut from '../img/mangnut.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Wanted from '../img/Wanted-logo.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Left from '../img/angle-left-solid.svg';
import Right from '../img/angle-right-solid.svg';

SwiperCore.use([Navigation, Pagination]);

const Career = () => (
  <Wrap>
    <Title text="CAREER" />
    <ContentContainer>
      <Logo>
        <LogoImg src={Mangnut} alt="mangnut" />
      </Logo>
      <Content>
        <ContentText>수버킷</ContentText>
        <Text>2021.07-2021.12</Text>
        <StackTitle>운영팀(IT) / 프론트앤드 개발자(인턴)</StackTitle>
        <Text>망넛이네 브랜드 제품을 구매할 수 있는 모바일/웹 서비스를 유지보수, 개선했습니다.</Text>
        <StackTitle>
          <FontAwesomeIcon icon={faCode} /> 코드 리팩토링
        </StackTitle>
        <Stack>
          <Item>웹 표준에 맞게 웹 접근성 향상 및 시맨틱 마크업</Item>
          <Item>크로스 브라우징(IE 11 브라우저 및 사파리 지원)</Item>
          <Item>데이터 요청 에러 및 로딩 핸들링</Item>
          <Item>웹 성능 분석 및 개선(이미지 최적화 등)</Item>
        </Stack>
        <StackTitle>
          <FontAwesomeIcon icon={faCode} /> 망넛이네 프로트엔드 구현
        </StackTitle>
        <Stack>
          <Item>메인 : 상품 후기 개수 및 별점 연동, 구매전환률 향상을 위한 타이머 쿠폰 팝업 개발</Item>
          <Item>회원정보 : 마이페이지 UI 개편/쿠폰 확인 페이지 UI 개편/그래프를 이용한 등급 확인 페이지 개발</Item>
          <Item>상품상세 : 상품 상세 내용을 숨길 수 있는 아코디언 토글 개발</Item>
        </Stack>
      </Content>
    </ContentContainer>
    <ContentContainer>
      <Logo>
        <LogoImg src={Wanted} alt="wanted" widthPercent={70} />
      </Logo>
      <Content>
        <ContentText>프리온보딩 프론트엔드 코스</ContentText>
        <Text>2022.02-04</Text>
        <Text>다양한 기술 스택을 이용하여 9개의 프로젝트를 완성하였습니다. </Text>
        <SwiperContainer>
          <Swiper className="banner" spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 프로젝트 주요 내용
                </StackTitle>
                <SubText>자세한 역할/참여율/링크는 프로젝트별 슬라이드에서 확인할 수 있습니다.</SubText>
                <SubStackTitle>주요 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>상태관리, 데이터 패칭 캐싱, 로컬 캐싱</Item>
                  <Item>로딩/에러 핸들링, 비동기 처리, CORS 오류</Item>
                  <Item>성능 최적화, debounce</Item>
                  <Item>데이터 시각화(chart.js), css 애니메이션</Item>
                  <Item>controlledInput, Form, 유효성 검사</Item>
                  <Item>무한스크롤, 이미지 업로드/미리보기, 댓글, 채팅</Item>
                </Stack>
                <SubStackTitle>주요 기술스택</SubStackTitle>
                <Stack>
                  <Item>React, Vue</Item>
                  <Item>Redux, Redux-Toolkit, RTK query, Recoil</Item>
                  <Item>CSS: styled-component</Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 리뷰 조회, 등록 모바일 반응형 웹페이지
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>무한스크롤: Intersection Observer</Item>
                  <Item>
                    정렬, 리뷰 목록 UI(그리드 리스트), 댓글/대댓글 추가 수정 삭제, 좋아요/위시리스트, 링크 복사
                  </Item>
                  <Item>이미지 최적화, 성능최적화, 로컬 캐싱</Item>
                  <Item>controlledInput, Form</Item>
                  <Item>이미지 업로드/미리보기</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>react, react-router</Item>
                  <Item>redux-toolkit, RTK query, props-types</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>배포 : vercel</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/Lee-Seonghyun316/wanted-codestates-project-9">Github</Link>
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-9-kappa.vercel.app/">배포주소</Link>
                  </Item>
                  <Item>
                    참여율 : 100% (개인 프로젝트)
                    <br />
                    <ParticipationChart>
                      <Participation percent={100} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 간병인 신청하기 모바일 웹페이지
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>리덕스 세팅(form 상태관리 리듀서, 제출 상태관리 리듀서)</Item>
                  <Item>제출 api 연결 및 비동기 처리</Item>
                  <Item>input 유효성 검사, 상태관리</Item>
                  <Item>페이지 이동(react-router), 필요한 상태 유실한 경우 첫페이지 이동</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>react, react-router</Item>
                  <Item>redux, props-types</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>배포 : vercel</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-06">
                      Github(private)
                    </Link>
                  </Item>
                  <Item>
                    <Link href=" https://wanted-codestates-project-05-06.vercel.app/">배포주소</Link>
                  </Item>
                  <Item>
                    참여율 : 15% (팀 프로젝트 : 7명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={15} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 쇼핑몰 의류 검색, 조회 웹페이지
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>로컬 캐싱 custom hook 개발</Item>
                  <Item>네트워크 요청, 비동기 데이터/로딩/에러처리</Item>
                  <Item>검색 알고리즘 구현</Item>
                  <Item>react-router params 설정</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>react, react-router</Item>
                  <Item>localStory</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>배포 : vercel</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05">
                      Github(public)
                    </Link>
                    몰
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-05-05-01.vercel.app/">배포주소</Link>
                  </Item>
                  <Item>
                    참여율 : 17% (팀 프로젝트 : 6명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={17} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 게임 전적사이트
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>채팅 기능 구현(응원 한마디) : firestore 이용</Item>
                  <Item>리덕스(개인적/팀 매치 리스트, 개별 매치 리스트, 매치 디테일)</Item>
                  <Item>네트워크 요청, 로딩/에러 핸들링 CORS 문제</Item>
                  <Item>css 애니메이션(나타내기)</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>react, react-router</Item>
                  <Item>axios, http 리덕스 미들웨어(CORS 오류 해결)</Item>
                  <Item>firebase(firestore 데이터 저장, 조회)</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>배포 : vercel</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-02">
                      Github(public)
                    </Link>
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-05-02.vercel.app/">배포주소</Link>
                  </Item>
                  <Item>
                    참여율 : 17% (팀 프로젝트 : 6명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={17} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 진단 검사 결과 페이지
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>HorizontalBar Graph 개발, 옵션 커스텀</Item>
                  <Item>그래프 데이터 가공, 전달</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>Vue, vue-chart.js</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>배포 : vercel</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-02">
                      Github(public)
                    </Link>
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-team-05-11.vercel.app/">배포주소</Link>
                  </Item>
                  <Item>
                    참여율 : 17% (팀 프로젝트 : 6명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={17} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 검색어를 추천하는 검색창
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>데이터 패칭, 캐싱(RTK query)</Item>
                  <Item>검색어 추천 API 호출 최적화(debounce, 로컬 캐싱)</Item>
                  <Item>Controlled Input</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>React, JS, storybook</Item>
                  <Item>redux-toolkit, RTK query, prop-types</Item>
                  <Item>Session Storage</Item>
                  <Item>CSS: styled-component</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-3">
                      Github(public)
                    </Link>
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-10-3/">
                      배포링크
                    </Link>
                  </Item>
                  <Item>
                    참여율 : 50% (팀 프로젝트 : 2명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={50} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 휴양림 조회/저장 웹페이지
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>axios 네트워크 요청</Item>
                  <Item>데이터/에러/로딩 비동기 처리</Item>
                  <Item>데이터 패칭 결과에 따른 사용자 피드백 제공</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>react, react-router</Item>
                  <Item>redux-toolkit</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>배포 : netlify</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-08">
                      Github(private)
                    </Link>
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-05-08.netlify.app/">배포주소</Link>
                  </Item>
                  <Item>
                    참여율 : 17% (팀 프로젝트 : 6명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={17} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> todoList 듀얼 셀렉터
                </StackTitle>
                <SubStackTitle> 구현기능/역할</SubStackTitle>
                <Stack>
                  <Item>recoil 생태 변경/적용</Item>
                  <Item>아이템 선택/이동/초기화, 불변성 고려</Item>
                  <Item>다중선택(commend, shift)</Item>
                </Stack>
                <SubStackTitle>기술스택</SubStackTitle>
                <Stack>
                  <Item>react</Item>
                  <Item>CSS: styled-component</Item>
                  <Item>recoil</Item>
                </Stack>
                <Stack>
                  <Item>
                    <Link href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-3">
                      Github(private)
                    </Link>
                  </Item>
                  <Item>
                    <Link href="https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-3/">
                      배포주소
                    </Link>
                  </Item>
                  <Item>
                    참여율 : 17% (팀 프로젝트 : 6명)
                    <br />
                    <ParticipationChart>
                      <Participation percent={17} />
                    </ParticipationChart>
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </Content>
    </ContentContainer>
  </Wrap>
);

export default Career;
const Wrap = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  --swiper-theme-color: black;
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 1rem;
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
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  margin: auto;
  padding: 2rem;
  gap: 2rem;
`;
const Logo = styled.div`
  margin: 0 auto 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 13rem;
  min-width: 13rem;
  height: 13rem;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: white;
`;
const LogoImg = styled.img`
  max-width: ${({ widthPercent }) => (widthPercent ? widthPercent : 90)}%;
`;
const Content = styled.div`
  border-left: 1px solid lightgray;
  padding-left: 2rem;
  width: 32rem;
`;
const ContentText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  padding: 1rem 0;
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  font-weight: 500;
  margin-bottom: 1rem;
`;
const SwiperContainer = styled.div`
  max-width: 100%;
  transform: translateX(-7%);
`;
const SwiperContent = styled.div`
  max-width: 80%;
  background-color: white;
  margin: auto;
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
`;
const StackTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: 600;
  padding: 1rem 0;
`;
const SubText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  padding-bottom: 0.5rem;
`;
const SubStackTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  font-weight: 700;
  padding: 1rem 0;
  color: grey;
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
const ParticipationChart = styled.div`
  height: 0.9rem;
  width: 50%;
  border-radius: 1rem;
  border: 1px solid lightgray;
  margin-top: 0.5rem;
`;
const Participation = styled.div`
  width: ${({ percent }) => (percent ? percent : 100)}%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.purple};
  opacity: 0.2;
  border-radius: ${({ percent }) => (percent < 100 ? '1rem 0 0 1rem' : '1rem')};
`;
const Link = styled.a`
  color: grey;
  font-weight: 600;
`;
