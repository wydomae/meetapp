import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #f94d6a;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
