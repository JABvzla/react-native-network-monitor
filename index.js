import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { NetworkListItem } from './components/network-list-item';
import itemStorage from './items-store';
import './network-interceptor';

export const NetworkMonitorScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <View style={styles.container}>
          <SafeAreaView />
          <FlatList
            data={itemStorage.getItems()}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <NetworkListItem {...item.item} />}
          />
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

const BUTTON_LEFT_POSITION = -25;
const BUTTON_BOTTOM_POSITION = 100;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    borderRadius: 100,
    width: 50,
    height: 50,
    bottom: BUTTON_BOTTOM_POSITION,
    right: BUTTON_LEFT_POSITION,
  },
});
