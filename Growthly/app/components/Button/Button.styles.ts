import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  button: {
    // left
    // top
    position: 'absolute',
    width: 310,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.growthly_green,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: Colors.growthly_darkblue,
  },
});

export default styles;