import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

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

    inputContainer: {
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        top: '25%',
        maxWidth: 350,
        marginBottom: 30,
    },
});

export default styles;