import React from 'react';

import { ScrollView } from 'react-native';
import MyCarousel from '../../components/MyCarousel';
import styled from 'styled-components/native'

import FlatCard from '../../components/FlatCard';
const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;


`

const StyledText = styled.Text`
font-size : 30px;
margin : 10px;
align-self:flex-start;
margin-left : 20px
`;
function FeedScreen({route,navigation}) {

  const title = '건협, 환경정화 플로깅 봉사활동 실시'
  const desc= ` 한국건강관리협회(회장 김인원)는 서울 강서구둘레길 일대에서 환경정화 플로깅 봉사활동을 실시했다고 지난 27일 밝혔다.

  플로깅(Plogging)은 걷거나 뛰면서 동시에 쓰레기를 줍는 운동으로 생활 속에서 탄소중립을 실천하고 개인의 건강까지 챙길 수 있어 새로운 비대면 사회공헌활동으로 대두되고 있다.
  
  이날 플로깅 활동에 참여한 건협사랑봉사단 본부 직원들은 강서구둘레길 약 4km를 다니며 버려진 쓰레기를 줍고 분리수거 등을 실시했다.
  
  김인원 건협 회장은 “이번 플로깅 봉사는 쾌적한 지역사회를 만들기 위한 자발적 봉사와 상생 문화가 확산된 의미있는 활동”이라며 “탄소감축과 기후위기 극복을 위해 임직원들이 일상생활 속에서 쉽게 실천할 수 있는 다양한 사회공헌활동을 지속적으로 추진하겠다”고 말했다.
  
  출처 : 의학신문(http://www.bosa.co.kr)`
  const author="[의학신문·일간보사=안치영 기자]"
const data = [{
  thumbnail:"https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_725092_16275204934731103.jpg",
  title: title,
  desc: desc,
  author :author,
  authorImage: undefined,
},{
  thumbnail:"https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_725092_16275204934731103.jpg",
  title: title,
  desc: desc,
  author :author,
  authorImage: undefined,
},{
  thumbnail:"http://cdn.bosa.co.kr/news/photo/202201/2167458_198913_1851.png",
  title: title,
  desc: desc,
  author :author,
  authorImage: undefined,
}]
  return (<Container>
    <ScrollView>
    <MyCarousel/>
    <StyledText>플로깅 뉴스</StyledText>
    {data.map((item,idx)=><FlatCard key={idx} item={item}/>)}
  
    </ScrollView>
        </Container>);
}

export default FeedScreen;
