import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
  screenContainer: {
	flex: 1,
	backgroundColor: Colors.growthly_darkblue,
  },

  keyline: {
	position: 'absolute',
	top: 135,
	left: 40,
	width: '82%',
	borderWidth: 0.5,
	borderColor: '#184B65',
  },

  confirmationContainer: {
	alignSelf: 'center',
	justifyContent: 'space-between',
	flexDirection: 'row',
	marginTop: '55%'
  },

  deleteButton: {
	padding: 15,
	margin: 15,
	width: '38%',
	height: '35%',
	borderRadius: 15,
	backgroundColor: Colors.growthly_green,
	justifyContent: 'center',
	alignItems: 'center'
  },

  deleteButtonV2: {
	backgroundColor: Colors.growthly_white
  },

  buttonText: {
	fontSize: 20,
    fontFamily: 'Inter-Regular',
	textAlign: 'center',
	color: Colors.growthly_darkblue
  },
});

export default styles;