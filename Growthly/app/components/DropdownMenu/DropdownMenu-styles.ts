import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
    dropdown: {
        height: 60,
        top: '27%',
        justifyContent: 'space-between',
        backgroundColor: Colors.growthly_inputblue,
        flexDirection: 'row',
        width: '47.5%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 15
    },

    text: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_white,
        textAlign: 'center'
    },

    ant: {
        color: Colors.growthly_white
    }
});

export default styles;