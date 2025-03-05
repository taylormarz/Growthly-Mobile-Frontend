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
        fontFamily: 'Inter-Bold'
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

    keyline: {
        position: 'absolute',
        top: 425,
        left: 60,
        width: 310,
        borderWidth: .25,
        borderColor: Colors.growthly_darkblue,
    },

    breakdownContainer: {
        left: 40,
        top: 280,
        width: 350,
        height: 315,
        borderRadius: 15,
        backgroundColor: Colors.growthly_lightblue,
        padding: 20,
    },

    detailComponent: {
        width: 310,
        height: 75,
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 25,
        backgroundColor: Colors.growthly_white,
    },    

    breakdownText: {
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_darkblue,
        marginRight: 45,
    },

    breakdownText2: {
        marginRight: 48,
    },

    breakdownText3: {
        marginRight: 37,
    },

    breakdownLabel: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    
    greenSquare: {
        width: 15,
        height: 15,
        backgroundColor: 'green',
        borderRadius: 5,
        marginLeft: 10,
    },

    yellowSquare: {
        width: 15,
        height: 15,
        backgroundColor: 'yellow',
        borderRadius: 5,
        marginLeft: 10,
    },
    
    breakdownLabelText: {
        fontSize: 15,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_darkblue,
        textAlign: 'right',
    },

    descriptionContainer: {
        marginTop: 5
    }
});

export default styles;