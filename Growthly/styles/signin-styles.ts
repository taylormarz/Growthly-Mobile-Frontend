import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const styles = StyleSheet.create({
  // repeat styles, move to general style sheet
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
    top: 129,
    left: 58,
    width: 107,
    height: 24,
  },
  keyline: {
    position: 'absolute',
    top: 177,
    left: 58,
    width: 315,
    borderWidth: 0.5,
    borderColor: '#184B65',
  },
  keyline1: {
    top: 177,
  },
  keyline2: {
    top: 679,
  },
  header: {
    position: 'absolute',
    top: 230,
    left: 58,
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    letterSpacing: 2,
    color: Colors.growthly_white,
  },
  input: {
    position: 'absolute',
    left: 58,
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
  radioButtonContainer: {
    position: 'absolute',
    top: 479,
    left: 58,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioDefault: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: Colors.growthly_white,
    backgroundColor: Colors.growthly_white,
  },
  radioActive: {
    backgroundColor: Colors.growthly_green,
    borderColor: Colors.growthly_green,
  },
  radioText: {
    marginLeft: 15,
    fontSize: 12,
    fontFamily: 'Inter-Light',
    letterSpacing: 1,
    color: Colors.growthly_white,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: Colors.growthly_darkblue,
  },
  createButton: {
    position: 'absolute',
    top: 709,
    left: 58,
    width: 129,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.growthly_teal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.growthly_white,
  },
  forgotPass: {
    position: 'absolute',
    top: 720,
    left: 280,
    textDecorationLine: 'underline',
  },
});

export default styles;