// OverviewComponent.styles.ts
import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  component: {
    width: 300,
    height: 85,
    padding: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
    backgroundColor: Colors.growthly_white,
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  textBox: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.growthly_darkblue,
  },
  value: {
    fontSize: 14,
    color: Colors.growthly_darkblue,
  },
  button: {
    width: 125,
    backgroundColor: Colors.growthly_darkblue,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.growthly_white,
    fontSize: 14,
  },
});

export default styles;