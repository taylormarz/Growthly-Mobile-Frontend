import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.growthly_darkblue
    },

    growthlyLogo: {
        position: 'absolute',
        top: 85,
        left: 40,
        width: 107,
        height: 24,
    },

    cancelButtonText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_white,
        position: 'absolute',
        top: 85,
        left: 330,
        textDecorationLine: 'underline',
    },

    headerText: {
        left: 40,
        top: 205,
        color: Colors.growthly_white,
        fontSize: 35,
        fontFamily: 'Inter-Bold'
    },

    subheadingText: {
        left: 40,
        top: 195,
        color: Colors.growthly_white,
        fontSize: 18,
        fontFamily: 'Inter-Light'
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