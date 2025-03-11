import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 170,
    top: 0,
    left: 0,
    backgroundColor: Colors.growthly_darkblue,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: Colors.growthly_white,
    paddingLeft: 40,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.growthly_white,
    paddingLeft: 40,
  },
});

export default styles;
