import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-runtime-monitor/utils';

export const SearchBar = ({ onChangeText, onSelectFilter, value, filters = [], selectedFilter }) => {
  return (
    <View style={{ padding: scale(10), backgroundColor: '#fcfcfc' }}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder="Filter by URL"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          padding: 10,
        }}
      />
      <View style={{ flexDirection: 'row', gap: scale(2), marginTop: scale(8) }}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => onSelectFilter(filter)}
            style={{
              backgroundColor: selectedFilter === filter ? '#eee' : '#fff',
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: scale(15),
              paddingHorizontal: scale(10),
              paddingVertical: scale(4),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
