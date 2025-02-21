import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/colors';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },

    headerText: {
        left: 40,
        top: 225,
        color: Colors.growthly_darkblue,
        fontSize: 35,
        fontWeight: 'bold',
    },

    scoreContainer: {
        left: 40,
        top: 245,
        width: 350,
        height: 120,
        borderRadius: 15,
        backgroundColor: Colors.growthly_lightblue,
        padding: 20,
    },

    scoreTextLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },

    // this will need to be changed, i'll probably make this label a component that changes based on credit score (hard coding for now)
    scoreTextWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },

    scoreText: {
        fontSize: 35,
        fontFamily: 'Inter-Black',
        color: Colors.growthly_darkblue,
        marginRight: 5,
    },

    scoreTextSecondary: {
        fontSize: 20,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_darkblue,
    },

    scoreLabel: {
        width: 115,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.growthly_white
    },

    scoreLabelText: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_darkblue,
    },

    scoreDescriptor: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_darkblue,
    },

    keyline: {},
});

export default styles;
