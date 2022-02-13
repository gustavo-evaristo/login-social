import React, {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import GoogleIcon from '../../assets/images/google-icon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';
import {Toast} from 'toastify-react-native';
import Store from '../../store';
import {isEmpty} from 'lodash';

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

  const sign = async () => {
    if (isEmpty(username) && isEmpty(password)) {
      return Toast.error('Invalid Fields');
    }

    const user = await Store.get('username');
    const userPassword = await Store.get('password');

    if (user !== username || password !== userPassword || isEmpty(user)) {
      return Toast.error('User does not exist');
    }

    return navigation.navigate('home');
  };

  return (
    <Container>
      <ContentText>
        <Title>Hello Again!</Title>
        <Description>Wellcome back you've been missed!</Description>
      </ContentText>
      <ContentInput>
        <InputUsername
          placeholder="Enter username"
          onChangeText={setusername}
          value={username}
        />
        <InputPassword
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Button onPress={sign}>
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
        <TextRegisterSpan onPress={toRegister}>Register now</TextRegisterSpan>
      </ContentRegister>
    </Container>
  );
};

export default Sign;
