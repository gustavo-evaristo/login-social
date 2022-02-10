import React, {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import GoogleIcon from '../../assets/images/google-icon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';

import {
  Container,
  Title,
  Description,
  ContentText,
  Button,
  TextButton,
  ContentInput,
  InputUsername,
  InputPassword,
  TextSocial,
  TextRegister,
  TextRegisterSpan,
  ContentRegister,
  Image,
  ContentIcons,
} from './styles';

const Sign: FC = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();

  const toRegister = () => navigation.navigate('register');

  return (
    <Container>
      <ContentText>
        <Title>Hello Again!</Title>
        <Description>Wellcome back you've been missed!</Description>
      </ContentText>
      <ContentInput>
        <InputUsername
          placeholder="Enter username"
          onChange={setusername}
          value={username}
        />
        <InputPassword
          placeholder="Password"
          onChange={setPassword}
          value={password}
          secureTextEntry
        />

        <Button onPress={toRegister}>
          <TextButton>Sign In</TextButton>
        </Button>

        <TextSocial>or continue with</TextSocial>
        <ContentIcons>
          <Image source={GoogleIcon} />
          <Image source={FacebookIcon} />
        </ContentIcons>
      </ContentInput>

      <ContentRegister>
        <TextRegister>Not a member? </TextRegister>
        <TextRegisterSpan>Register now</TextRegisterSpan>
      </ContentRegister>
    </Container>
  );
};

export default Sign;
