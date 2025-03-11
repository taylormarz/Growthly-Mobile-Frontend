import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  input: {
    //position: 'absolute',
    width: 310,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.growthly_white,
    backgroundColor: Colors.growthly_inputblue,
  },
});

export default styles;
