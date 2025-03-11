import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },

  headerText: {
    left: 40,
    top: 225,
    color: Colors.growthly_darkblue,
    fontSize: 35,
    fontFamily: 'Inter-Bold',
  },

  matchesContainer: {
    left: 40,
    marginTop: '60%',
    width: '81%',
    height: '27%',
    borderRadius: 15,
    backgroundColor: Colors.growthly_lightblue,
  },

  matchesContainerText1: {
    fontFamily: 'Inter-Regular',
    marginTop: 15,
    padding: 25,
    fontSize: 18,
    color: Colors.growthly_darkblue,
  },

  matchesContainerText2: {
    paddingTop: 0,
  },

  keyline: {
    position: 'absolute',
    top: 105,
    left: 20,
    width: 310,
    borderWidth: 0.25,
    borderColor: Colors.growthly_teal2,
  },

  keyline2: {
    borderWidth: 0.25,
    borderColor: Colors.growthly_teal2,
  },

  availableContainer: {
    width: '81%',
    maxHeight: '35%',
    marginTop: '60%',
    alignSelf: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderRadius: 15,
    backgroundColor: Colors.growthly_lightblue,
  },

  loanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  loanText: {
    fontSize: 16,
    color: Colors.growthly_darkblue,
    marginBottom: 5,
  },

  loanSelectionButton: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: Colors.growthly_white,
  },
});

export default styles;
