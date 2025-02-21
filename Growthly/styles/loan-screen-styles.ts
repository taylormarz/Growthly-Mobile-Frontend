import { StyleSheet } from 'react-native';
import { Colors } from './colors';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },

    contentContainer: {
        color: Colors.growthly_darkblue,
        left: 40,
        top: 240
    },

    headerText: {
        left: 40,
        top: 225,
        color: Colors.growthly_darkblue,
        fontSize: 35,
        fontWeight: 'bold',
    },

    applyButtonActive: {
        width: 130,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        position: 'absolute',
        top: 145,
        left: 40,
        borderWidth: .75,
        borderColor: Colors.growthly_darkblue,
        backgroundColor: Colors.growthly_green,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    applyButtonDisabled: {
        width: 130,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        position: 'absolute',
        top: 145,
        left: 40,
        borderWidth: .750 ,
        borderColor: Colors.growthly_darkblue,
        backgroundColor: Colors.growthly_white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    manageButtonActive: {
        width: 130,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        position: 'absolute',
        top: 145,
        left: 185,
        borderWidth: 1,
        borderColor: Colors.growthly_darkblue,
        backgroundColor: Colors.growthly_green,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    manageButtonDisabled: {
        width: 130,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        position: 'absolute',
        top: 145,
        left: 185,
        borderWidth: 1,
        borderColor: Colors.growthly_darkblue,
        backgroundColor: Colors.growthly_white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    buttonText: {
        color: Colors.growthly_darkblue,
        fontFamily: 'Inter-Medium',
        fontSize: 15
    },

    applyContainer: {
        left: 40,
        top: 265,
        width: 350,
        height: 410,
        borderRadius: 15,
        backgroundColor: Colors.growthly_lightblue,
    },

    keyline: {
        position: 'absolute',
        top: 118,
        left: 20,
        width: 310,
        borderWidth: .25,
        borderColor: Colors.growthly_teal2,
      },

    keyline2: {
        top: 140,
    },

    keyline3: {
        top: 327,
    },

    keyline4: {
        width: 300,
        top: 390,
        left: 65
    },

    heading: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: Colors.growthly_darkblue
    },

    h1: {
        left: 20,
        top: 20,
    },

    h2: {
        left: 20,
        top: 45,
        marginBottom: 55
    },

    h3: {
        left: 20,
        top: 80,
        marginBottom: 55
    },

    inputContainer: {
        height: 45,
        borderRadius: 10,
        marginBottom: 55,
        backgroundColor: Colors.growthly_white
    },

    fieldContainer1: {
        left: 20,
        top: 35,
        width: 310,
        marginBottom: 25
    },

    inputField: {
        color: Colors.growthly_darkblue,
        height: 45,
        width: '100%',
        borderRadius: 10,
        backgroundColor: Colors.growthly_white,
        paddingLeft: 20,
        fontSize: 16,
        textAlignVertical: 'center'
    },

    cycleButton: {
        position: 'absolute',
        left: 20,
        width: 145,
        height: 45,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.growthly_white
    },

    monthlyButton: {
        position: 'absolute',
        top: 0,
        left: 20,
        width: 145,
        height: 45,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.growthly_white
    },

    biweeklyButton: {
        position: 'absolute',
        top: 0,
        left: 185,
        width: 145,
        height: 45,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.growthly_white
    },

    durationButton: {
        position: 'absolute',
        top: 35,
        width: 35,
        height: 35,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.growthly_white
    },

    cycleButtonText: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: Colors.growthly_darkblue
    },

    applyButton: {
        position: 'absolute',
        top: 100,
        width: 310,
        height: 45,
        left: 20,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.growthly_darkblue

    },

    applyButtonText: {
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        color: Colors.growthly_white
    },

    manageContainer: {
        left: 40,
        top: 245,
        width: 350,
        height: 225,
        borderRadius: 15,
        backgroundColor: Colors.growthly_lightblue,
    },

    manageContainerText1: {
        fontFamily: 'Inter-Regular',
        marginTop: 15,
        padding: 25,
        fontSize: 18
    },

    manageContainerText2: {
        paddingTop: 0,
    }
});

export default styles;