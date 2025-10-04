import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export const ToggleButton = ({ closed, open }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(prev => !prev)}>
        {closed}
      </TouchableOpacity>
      {isOpen && open}
    </View>
  );
};
