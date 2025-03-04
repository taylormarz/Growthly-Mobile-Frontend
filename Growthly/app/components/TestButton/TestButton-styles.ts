import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    width: '80%',
    top: '27%',
    maxWidth: 350,
    marginTop: 25,
  },

  button: {
    width: '100%',
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.growthly_white,
    backgroundColor: Colors.growthly_green,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    color: Colors.growthly_darkblue,
  },
});

export default styles;