import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');
export const scale = (size) => (screen.width / 395) * size;
