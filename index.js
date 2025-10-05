import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { NetworkListItem } from './components/network-list-item';
import itemStorage from './items-store';
import './network-interceptor';
import { scale } from './utils';

const SearchBar = ({ onChangeText, value }) => {
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
    </View>
  );
};

export const NetworkMonitorScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const handlePress = () => {
    setIsOpen((prev) => !prev);
  };
  const items = itemStorage.getItems();
  const filteredItems = items.filter((item) =>
    String(item.url).toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {isOpen && (
        <View style={styles.container}>
          <SafeAreaView style={{ flex: 1, paddingTop: 80 }}>
          <FlatList
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
              <SearchBar value={search} onChangeText={setSearch} />
            }
            data={filteredItems}
            renderItem={(item) => <NetworkListItem {...item.item} />}
            />
          </SafeAreaView>
        </View>
      )}
      <TouchableOpacity
        onPress={handlePress}
        style={{
          ...styles.button,
          backgroundColor: !isOpen ? '#00f' : '#f0f',
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fcfcfc',
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    borderRadius: 100,
    width: 50,
    height: 50,
    bottom: 100,
    right: -25,
  },
});
