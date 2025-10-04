import { Text, View } from 'react-native';
import { scale } from '../utils';
import { ToggleButton } from './toggle-button';

export const NetworkListItemOpen = (item) => {
  const { request, response } = item;

  return (
    <View
      style={{
        paddingTop: scale(5),
        paddingBottom: scale(10),
        paddingHorizontal: scale(20),
        marginBottom: scale(20),
        backgroundColor: '#eee',
        gap: scale(5),
      }}
    >
      <ToggleButton
        closed={
          <Text style={{ fontSize: scale(14), fontWeight: 'bold' }}>
            Request
          </Text>
        }
        open={<Text style={{ fontSize: scale(12) }}>{request}</Text>}
      />
      <ToggleButton
        closed={
          <Text style={{ fontSize: scale(14), fontWeight: 'bold' }}>
            Response
          </Text>
        }
        open={<Text style={{ fontSize: scale(12) }}>{response}</Text>}
      />
    </View>
  );
};
