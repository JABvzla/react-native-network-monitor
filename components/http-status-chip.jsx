import { Text, View } from 'react-native';
import { scale } from '../utils';


export const HttpStatusChip = ({ status }) => {
  const color = status >= 200 && status < 300 ? '#0a0' : '#a00';
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 100,
      }}
    >
      <Text style={{ fontSize: scale(12), color }}>{status}</Text>
    </View>
  );
};
