import { View } from 'react-native';
import { scale } from '../utils';
import { NetworkListItemClosed } from './network-list-item-closed';
import { NetworkListItemOpen } from './network-list-item-open';
import { ToggleButton } from './toggle-button';

export const NetworkListItem = (item) => {
  return (
    <View
      style={{
        borderRadius: scale(10),
        marginHorizontal: scale(10),
        marginVertical: scale(3),
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
      }}
    >
      <ToggleButton
        closed={<NetworkListItemClosed {...item} />}
        open={<NetworkListItemOpen {...item} />}
      />
    </View>
  );
};
