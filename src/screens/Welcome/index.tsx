import React, {FC} from 'react';
import Avatar from '../../assets/images/image.png';
import {useNavigation} from '@react-navigation/native';

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

const Welcome: FC = () => {
  const navigation = useNavigation<any>();

  const toRegister = () => navigation.navigate('register');
  const toSign = () => navigation.navigate('sign');

  return (
    <Container>
      <Image source={Avatar} />
      <ContentText>
        <Title>Discover your Dream job Here</Title>
        <Description>
          explore all the most exiting jobs roles based on your interest and
          study major
        </Description>
      </ContentText>
      <ContentButton>
        <Button onPress={toRegister}>
          <TextButton>Register</TextButton>
        </Button>
        <Sign onPress={toSign}>Sign</Sign>
      </ContentButton>
    </Container>
  );
};

export default Welcome;
