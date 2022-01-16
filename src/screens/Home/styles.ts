import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f9f9f9;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 300px;
  margin-left: 40px;
`;

export const ContentText = styled.View`
  margin: 0 auto;
  width: 70%;
`;

export const Title = styled.Text`
  font-size: 31px;
  font-family: "Poppins-Medium"
  text-align: center;
  margin-bottom: 20px;
  color: #202024;
  line-height: 35px;
`;

export const Description = styled.Text`
  font-size: 13px;
  font-family: "Poppins-Light"
  text-align: center;
  color: #202024;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  font-family: 'Poppins-Regular';
`;

export const Button = styled.TouchableOpacity`
  background-color: #597c6c;
  padding: 20px 30px;
  border: none;
  border-radius: 8px;
  margin: 15px 0;
`;

export const ContentButton = styled.View`
  margin: 0 auto;
`;

export const Sign = styled.Text`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  color: #202024;
  text-decoration: underline;
  font-family: 'Poppins-Regular';
`;
