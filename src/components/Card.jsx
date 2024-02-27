import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/thumbnail1.png'
import Channel from '../img/channel.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Description = styled.div`

`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
      <Container>
      <Image src={ Thumbnail } />
      <Details>
        <ChannelImg src={ Channel } />
        <Description>
          <Title>Tequila</Title>
          <ChannelName>El Jaliscience</ChannelName>
          <Info>128k views • 3 days ago</Info>
        </Description>
      </Details>
    </Container>
    </Link>

  )
}

export default Card