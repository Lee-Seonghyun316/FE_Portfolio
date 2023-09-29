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
import Jaranda from '../img/jaranda.png';

SwiperCore.use([Navigation, Pagination]);

const Career = () => (
  <Wrap id='career'>
    <Title text='CAREER' />
    <ContentContainer>
      <Logo>
        <LogoImg src={Jaranda} alt='jaranda' />
      </Logo>
      <Content>
        <ContentText>자란다</ContentText>
        <Text>2022.05-재직중</Text>
        <StackTitle>개발 챕터 / 프론트앤드 개발자(정규직)</StackTitle>
        <Text>에듀 테크 플랫폼 <Link href={'https://jaranda.kr/index_parent'} target='_blank'>자란다</Link>의 클라이언트를 개발 및 유지보수
          하였습니다. </Text>
        <SwiperContainer>
          <Swiper className='banner' spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 서비스 속도 개선
                </StackTitle>
                <Stack>
                  <Item><Emphasis>성과</Emphasis>메인화면 로딩속도는 sentry 측정 RUM(Real User Monitoring) 데이터으로 보았을 때 FCP 기준 3.13s
                    에서 1.57s로
                    49.8% 개선되었으며,
                    메인 번들 사이즈는 parsed size 기준 2.2MB로 29% 감소하였습니다.
                  </Item>
                  <Item><Emphasis>코드 스플리팅</Emphasis>각 화면/관심사별로 자바스크립트 코드를 모듈화하여 관련 화면 진입 등 필요한 시점에 작은 크기의 JS 번들로 불러올 수
                    있게 하였습니다.
                  </Item>
                  <Item><Emphasis>메인 JS 번들 블록킹 비동기로딩</Emphasis>화면 진입 즉시 필요하지 않은 써드 파티 스크립트들을 지연 로딩하고 스타일 코드가 블럭킹 요소로
                    작용하지 않도록
                    비동기 로드하였습니다.
                  </Item>
                  <Item>코드 스플리팅 프로젝트 상세 내용은 <Link href='https://techblog.jaranda.kr/asdfsdf-2d9d31a39aa1'
                                                  target='_blank'>기술 블로그</Link>에서 확인 가능합니다.
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> CI/CD 파이프라인 구축 및 유지보수
                </StackTitle>
                <Stack>
                  <Item><Emphasis>성과</Emphasis>코드리뷰 비용 및 배포 리소스 감소
                  </Item>
                  <Item>client 코드 포맷을 lint를 이용해 주도적으로 일원화하고, PR에 커밋이 푸시되었을 때 CI 통과여부를 검사하여 성공했을 때만 머지 가능하도록 CI 파이프라인을
                    추가했습니다. 또한 에러가 발생했을 때 동료 개발자들이 수정에 용이하도록 가이드 스크립트를 제공하였습니다.
                  </Item>
                  <Item>Jenkins를 사용하여 특정 브랜치(dev/staging)에 pr이 머지되었을 때를 트리거하여 CD 파이프 동작하도록 구축했습니다. 또한 JS 번들이 레이지 로딩되고
                    있는 환경을 고려하여 사용자가 안정적인 서비스를 경험할 수 있도록 chunk JS 파일이 일주일 간 제공되도록 수정했습니다.
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> angular에서 nextjs 프레임워크 마이그레이션
                </StackTitle>
                <Stack>
                  <Item><Emphasis>성과</Emphasis>버그 발생률 감소, jMeter로 측정한 웹성능 기준 페이지 로드 속도 60% 이상 증가
                  </Item>
                  <Item>서비스가 중단되지 않고 점진적으로 마이그레이션될 수 있도록 iframe을 이용하여 기존 레거시 프로젝트와 마이그레이션된 프로젝트를 병행하여 서비스를 제공하였습니다.
                  </Item>
                  <Item>두 프로젝트 간 이벤트, 데이터 등을 주고받기 위해 postMessage를 이용하여 메시지 프로토콜을 구축하였으며 이를 이용해 중복 api 호출을 줄이고, 마이그레이션으로
                    인한 사용자 임팩트를 최소화하였습니다.
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 에듀테크 서비스를 개발 및 운영
                </StackTitle>
                <Stack>
                  <Item><Emphasis>성과</Emphasis>
                    *일정조율: 확정률 +6.2%p, 매칭률 +7.7%p
                    *선 지원 후 오티 첫 방문률 +60%p
                  </Item>
                  <Item>부모님과 선생님을 적절한 조건에 따라 매칭 및 수업을 진행하는 에듀테크 서비스 개발 및 유지보수하였습니다.
                  </Item>
                  <Item>믹스패널, 브레이즈 등의 마테크툴을 이용하여 사용자 행동을 관찰하고 서비스 내 UI/UX 를 개선했습니다.
                  </Item>
                  <Item>
                    프로젝트 결과 확인을 위해 A/B 테스트를 진행했으며, 테스트 자동화를 위해 관련 서비스를 구축하였습니다.
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent>
                <StackTitle>
                  <FontAwesomeIcon icon={faCode} /> 프로그램 빌더 개발 및 운영
                </StackTitle>
                <Stack>
                  <Item><Emphasis>성과</Emphasis>
                    프로그램 생성 시 필요한 리소스 50 퍼센트 감소, 작업 프로세스 감소(3단계 -> 1단계)
                  </Item>
                  <Item>프로그램 상세 페이지, 신청 form, 프로그램 데이터를 빌더를 통해 자동으로 생성하는 소프트웨어를 개발 및 개선
                  </Item>
                  <Item>과거 프로그램 생성 시에는 프로그램 MD분이 프로그램 기획서를 작성하면, 서버 개발자가 프로그램 테이블에 데이터를 추가하고, 클라이언트 개발자가 신청서 내 프로그램 옵션 및
                    상세 페이지를 하드코딩 3단계가 필요했습니다. 위 프로젝트 배포 후, 백오피스에서 MD분이 프로그램 스펙을 설정하면 DB 작업, 신청서 옵션
                    적용, 상세 페이지 생성 과정이 자동화되었습니다.
                  </Item>
                </Stack>
              </SwiperContent>
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </Content>
    </ContentContainer>
    <ContentContainer>
      <Logo>
        <LogoImg src={Mangnut} alt='mangnut' />
      </Logo>
      <Content>
        <ContentText>수버킷</ContentText>
        <Text>2021.07-2021.12</Text>
        <StackTitle>운영팀(IT) / 프론트앤드 개발자(IPP 인턴)</StackTitle>
        <Text>커머스 웹 서비스를 개발 및 운영했습니다. </Text>
        <StackTitle>
          <FontAwesomeIcon icon={faCode} /> 웹 표준 및 웹 접근성 개선
        </StackTitle>
        <Stack>
          <Item>웹 표준을 준수하여 시맨틱 마크업 및 웹 접근성을 향상했습니다.</Item>
          <Item>크로스 브라우징 작업을 통해 다양한 브라우저에서의 호환성 확보했습니다.</Item>
        </Stack>
        <StackTitle>
          <FontAwesomeIcon icon={faCode} /> SEO(검색 엔진 최적화)
        </StackTitle>
        <Stack>
          <Item>검색 엔진 최적화를 위한 작업을 진행하여 웹 사이트의 노출성을 향상시켰습니다. </Item>
          <Item>키워드 연구, 메타 태그 최적화, 사이트 맵 생성 등을 통해 검색 결과에서 상위 랭크를 달성했습니다. </Item>
        </Stack>
      </Content>
    </ContentContainer>
    <ContentContainer>
      <Logo>
        <LogoImg src={Wanted} alt='wanted' widthPercent={70} />
      </Logo>
      <Content>
        <ContentText>프리온보딩 프론트엔드 코스</ContentText>
        <Text>2022.02-04</Text>
        <Text>다양한 기술 스택을 이용하여 8개의 프로젝트를 완성하였습니다. </Text>
        <SwiperContainer>
          <Swiper className='banner' spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
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
                    <Link href='https://github.com/Lee-Seonghyun316/wanted-codestates-project-9'>Github</Link>
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-9-kappa.vercel.app/'>배포주소</Link>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-06'>
                      Github(private)
                    </Link>
                  </Item>
                  <Item>
                    <Link href=' https://wanted-codestates-project-05-06.vercel.app/'>배포주소</Link>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05'>
                      Github(public)
                    </Link>
                    몰
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-05-05-01.vercel.app/'>배포주소</Link>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-02'>
                      Github(public)
                    </Link>
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-05-02.vercel.app/'>배포주소</Link>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-11'>
                      Github(public)
                    </Link>
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-team-05-11.vercel.app/'>배포주소</Link>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-3'>
                      Github(public)
                    </Link>
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-10-3/'>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-08'>
                      Github(private)
                    </Link>
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-05-08.netlify.app/'>배포주소</Link>
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
                    <Link href='https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-3'>
                      Github(private)
                    </Link>
                  </Item>
                  <Item>
                    <Link href='https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-3/'>
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

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next {
    background: url(${Right}) no-repeat center;
    visibility: hidden;
  }

  .swiper-button-prev {
    background: url(${Left}) no-repeat center;
    visibility: hidden;
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
  width: 65%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
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

  :hover {
    .swiper-button-next,
    .swiper-button-prev {
      visibility: visible;
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  color: darkblue;
  font-weight: 600;
  text-decoration: none;
`;
const Emphasis = styled.p`
  font-weight: bolder;
  font-size: large;
  margin-bottom: 0.2rem;
`;