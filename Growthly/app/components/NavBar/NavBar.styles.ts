import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.growthly_white,
    paddingVertical: 10,
    paddingBottom: 50,
    borderTopWidth: 1,
    borderTopColor: Colors.growthly_darkblue,
    height: 131,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconLabel: {
    fontSize: 12,
    color: Colors.growthly_darkblue,
    marginTop: 5,
  },
});

export default styles;