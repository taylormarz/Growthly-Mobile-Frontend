import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors'

const styles = StyleSheet.create({
  settingContainerText: {
    padding: 27,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.growthly_darkblue
  },
  settingComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '97%',
  },  
  settingButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.growthly_darkblue,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Inter-Regulsr',
    fontSize: 20,
    color: Colors.growthly_white
  },
  keyline: {
    position: 'absolute',
    top: 75,
    left: 20,
    width: 310,
    borderWidth: .25,
    borderColor: Colors.growthly_teal2,
},
});

export default styles;