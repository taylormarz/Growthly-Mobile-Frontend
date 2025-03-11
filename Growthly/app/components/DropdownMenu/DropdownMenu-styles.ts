import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  dropdown: {
    height: 60,
    width: '47.5%',
    top: '27%',
    backgroundColor: Colors.growthly_inputblue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
    borderColor: Colors.growthly_inputblue,
  },

  text: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.growthly_white,
  },

  caretIcon: {
    marginLeft: 10,
  },

  dropdownOptions: {
    position: 'absolute',
    width: '47.5%',
    top: '170%',
    backgroundColor: Colors.growthly_inputblue,
    borderRadius: 15,
    zIndex: 1,
    maxHeight: 130,
  },

  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.growthly_darkblue,
    borderRadius: 15,
  },

  optionText: {
    color: Colors.growthly_white,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
