import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { NetworkListItem } from 'react-native-runtime-monitor/components/network-list-item';
import { SearchBar } from 'react-native-runtime-monitor/components/search-bar';
import itemStorage from 'react-native-runtime-monitor/items-store';
import 'react-native-runtime-monitor/network-interceptor';

export const Monitor = itemStorage;
export const NetworkMonitorScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const handlePress = () => {
    setIsOpen((prev) => !prev);
  };
  const items = itemStorage.getItems();
  const availableTypes = Array.from(new Set(items.map((item) => item.type))).sort();
  const [selectedFilter, setSelectedFilter] = useState('');
  const handleSelectFilter = (filter) => {
    setSelectedFilter((prev) => (prev === filter ? '' : filter));
  };
  const filteredItems = items.filter((item) =>
    String(item.url).toLowerCase().includes(search.toLowerCase()),
  ).filter((item) => selectedFilter ? item.type === selectedFilter : true);

  return (
    <>
      {isOpen && (
        <View style={styles.container}>
          <SafeAreaView style={{ flex: 1, paddingTop: 80 }}>
            <FlatList
              stickyHeaderIndices={[0]}
              ListHeaderComponent={
                <SearchBar
                  value={search}
                  onChangeText={setSearch}
                  filters={availableTypes.length > 1 ? availableTypes : []}
                  selectedFilter={selectedFilter}
                  onSelectFilter={handleSelectFilter}
                />
              }
              data={filteredItems}
              renderItem={({ item }) => {
                const { Component } = item;
                if (Component) return <Component />;
                return <NetworkListItem {...item} />;
              }}
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
