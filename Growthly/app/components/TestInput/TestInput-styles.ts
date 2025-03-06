import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/ColorPalette/colors';

const styles = StyleSheet.create({
    inputContainer: {
        alignSelf: 'center',
        width: '80%',
        top: '27%',
        maxWidth: 350,
        marginBottom: 30,
    },

    input: {
        width: '100%',
        height: 60,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_white,
        backgroundColor: Colors.growthly_inputblue,
    },
});

export default styles;