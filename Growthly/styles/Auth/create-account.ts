import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  // repeat style
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.growthly_darkblue,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.growthly_darkblue,
  },

  growthlyLogo: {
    position: 'absolute',
    top: 65,
    left: 58,
    width: 107,
    height: 24,
  },

  createText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.growthly_white,
  },

  forgotPass: {
    position: 'absolute',
    top: 65,
    left: 330,
    textDecorationLine: 'underline',
  },

  keyline1: {
    position: 'absolute',
    top: 115,
    left: 58,
    width: 315,
    borderWidth: 0.5,
    borderColor: '#184B65',
  },

  keyline2: {
    position: 'absolute',
    top: 215,
    left: 58,
    width: 315,
    borderWidth: 0.5,
    borderColor: '#184B65',
  },

  descriptor: {
    position: 'absolute',
    top: 145,
    left: 58,
    fontSize: 16,
    fontFamily: 'Inter-Light',
    letterSpacing: 0.5,
    color: Colors.growthly_white,
  },

  subhead: {
    position: 'absolute',
    top: 265,
    left: 58,
    fontSize: 16,
    fontFamily: 'Inter-Light',
    color: Colors.growthly_white,
  },

  header: {
    position: 'absolute',
    top: 290,
    left: 58,
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    letterSpacing: 2,
    color: Colors.growthly_white,
  },
});

export default styles;
