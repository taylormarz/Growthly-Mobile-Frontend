import { StyleSheet } from 'react-native';
import { Colors } from '../../ColorPalette/colors';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.growthly_darkblue
    },

    keyline: {
        position: 'absolute',
        top: 135,
        left: 40,
        width: '82%',
        borderWidth: 0.5,
        borderColor: '#184B65',
    },
});

export default styles;