import React from 'react';
import styled from 'styled-components';
import Title from './common/Title';
import Mangnut from '../img/mangnut.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Wanted from '../img/Wanted-logo.jpeg';

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
        <StackTitle>
          <FontAwesomeIcon icon={faCode} /> 리뷰 등록 및 확인 모바일 반응형 웹페이지
        </StackTitle>
        <Text>기술스택</Text>
        <Stack>
          <Item>react, react-router</Item>
          <Item>redux-toolkit, RTK query</Item>
          <Item>props-types</Item>
          <Item>react-router</Item>
          <Item>무한스크롤: Intersection Observer</Item>
          <Item>정렬, 리뷰 목록 UI(그리드 리스트), 댓글/대댓글 추가 수정 삭제, 좋아요/위시리스트, 링크 복사</Item>
          <Item>이미지 최적화, 성능최적화, 로컬 캐싱</Item>
          <Item>controlledInput, Form</Item>
          <Item>이미지 업로드/미리보기</Item>
        </Stack>
        <Text> 구현기능/역할</Text>
        <Stack>
          <Item>참여율 : 100%</Item>
          <Item>
            <Link href="https://github.com/Lee-Seonghyun316/wanted-codestates-project-9">Github</Link>
          </Item>
        </Stack>
      </Content>
    </ContentContainer>
  </Wrap>
);

export default Career;
const Wrap = styled.section`
  background-color: ${({ theme }) => theme.color.white};
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
const Link = styled.a`
  color: grey;
  font-weight: 600;
`;
