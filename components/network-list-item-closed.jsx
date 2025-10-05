import { Text, View } from 'react-native';
import { scale } from '../utils';
import { HttpStatusChip } from './http-status-chip';

export const NetworkListItemClosed = (item) => {
  const { method, status, time, date, url } = item;

  return (
    <View>
      <Text
        style={{
          fontSize: scale(14),
          paddingHorizontal: 8,
          paddingVertical: 10,
          color: '#222',
          textAlign: 'left',
          letterSpacing: scale(-0.5),
          height: scale(55),
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {url}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          backgroundColor: '#eee5',
          paddingHorizontal: 12,
          paddingVertical: 4,
        }}
      >
        <Text style={{ fontSize: scale(14), fontWeight: 'bold' }}>
          {method}
        </Text>
        <HttpStatusChip status={status} />

        <Text
          style={{ color: '#555', fontSize: scale(12), marginLeft: 'auto' }}
        >
          {!isNaN(time) && Number(time).toFixed(0)}ms
        </Text>
        <Text style={{ color: '#555', fontSize: scale(12) }}>{date}</Text>
      </View>
    </View>
  );
};
