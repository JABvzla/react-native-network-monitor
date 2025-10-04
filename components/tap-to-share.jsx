import { Share, Text, TouchableOpacity } from 'react-native';
import { scale } from '../utils';

export const TapToShare = ({ content, children }) => {
  const handleShare = () => Share.share({ message: content });

  return (
    <TouchableOpacity onPress={handleShare}>
      <Text style={{ fontSize: scale(12), marginLeft: 'auto' }}>
        Tap to Share
      </Text>
      {children}
    </TouchableOpacity>
  );
};
