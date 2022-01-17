import React, {FC} from 'react';
import Avatar from '../../assets/images/image.png';

import {
  Container,
  Image,
  Title,
  Description,
  ContentText,
  Button,
  TextButton,
  ContentButton,
  Sign,
} from './styles';

const Welcome: FC = () => (
  <Container>
    <Image source={Avatar} />
    <ContentText>
      <Title>Discover your Dream job Here</Title>
      <Description>
        explore all the most exiting jobs roles based on your interest and study
        major
      </Description>
    </ContentText>
    <ContentButton>
      <Button>
        <TextButton>Register</TextButton>
      </Button>
      <Sign>Sign</Sign>
    </ContentButton>
  </Container>
);

export default Welcome;
