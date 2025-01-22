import { StyleSheet } from 'react-native';
import { Colors } from '../styles/colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
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
    color: Colors.textSecond,
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
    color: Colors.textSecond,
    backgroundColor: Colors.inputFieldPrime,
  },
  userInput: {
    top: 299,
  },
  passInput: {
    top: 389,
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
    borderColor: Colors.textSecond,
    backgroundColor: Colors.secondary,
  },
  radioActive: {
    backgroundColor: Colors.buttonPrime,
    borderColor: Colors.buttonPrime,
  },
  radioText: {
    marginLeft: 15,
    fontSize: 12,
    fontFamily: 'Inter-Light',
    letterSpacing: 1,
    color: Colors.textSecond,
  },
  submitButton: {
    position: 'absolute',
    top: 559,
    left: 58,
    width: 310,
    height: 60,
    borderRadius: 15,
    backgroundColor: Colors.buttonPrime,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: Colors.buttonTextPrime,
  },
  createButton: {
    position: 'absolute',
    top: 709,
    left: 58,
    width: 129,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.buttonSecond,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.buttonTextSecond,
  },
  forgotPass: {
    position: 'absolute',
    top: 720,
    left: 280,
    textDecorationLine: 'underline',
  },
});

export default styles;