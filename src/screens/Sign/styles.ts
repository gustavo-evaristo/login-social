import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f9f9f9;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContentText = styled.View`
  margin: 0 auto;
  width: 70%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: "Poppins-SemiBold"
  text-align: center;
  margin-bottom: 15px;
  color: #202024;
`;

export const Description = styled.Text`
  font-size: 17px;
  font-family: "Poppins-Light"
  text-align: center;
  color: #202024;
`;

export const ContentInput = styled.View`
  margin: 0 auto;
  width: 80%;
`;

export const InputUsername = styled.TextInput`
  background: #f0f0f0;
  width: 100%;
  border-radius: 8px;
  padding: 22px 15px;
  color: #202024;
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;

export const InputPassword = styled.TextInput`
  background: #f0f0f0;
  width: 100%;
  border-radius: 8px;
  padding: 20px 15px;
  margin: 20px 0;
  color: #202024;
  font-family: 'Poppins-Regular';
`;

export const Button = styled.TouchableOpacity`
  background-color: #597c6c;
  padding: 20px 30px;
  border: none;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 0 10px #20202480;
  width: 100%;
`;
export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  font-family: 'Poppins-Regular';
`;

export const TextSocial = styled.Text`
  margin: 25px 0;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #202024;
  font-family: 'Poppins-Light';
`;

export const ContentRegister = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 80%;
  justify-content: center;
`;

export const TextRegister = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 14px;
  color: #202024;
`;

export const TextRegisterSpan = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 14px;
  color: #2d79dd;
  text-decoration: underline #2d79dd;
`;

export const ContentIcons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 36px;
  width: 36px;
`;
