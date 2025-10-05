import { Text, View } from 'react-native';
import { scale } from '../utils';
import { TapToShare } from './tap-to-share';
import { ToggleButton } from './toggle-button';

export const NetworkListItemOpen = (item) => {
  const { request, response, curl } = item;
  const sharedContent = [
    { label: 'REQUEST BODY', value: request },
    { label: 'RESPONSE', value: response },
    { label: 'CURL', value: curl },
  ];

  return (
    <View
      style={{
        paddingVertical: scale(8),
        paddingHorizontal: scale(20),
        backgroundColor: '#eee5',
        gap: scale(8),
      }}
    >
      {sharedContent.map(({ label, value }) => (
        <ToggleButton
          key={item.label}
          closed={
            <Text style={{ fontSize: scale(12), fontWeight: 'bold' }}>
              {label}
            </Text>
          }
          open={
            <TapToShare content={value}>
              <Text style={{ fontSize: scale(12) }}>{value}</Text>
            </TapToShare>
          }
        />
      ))}
    </View>
  );
};
