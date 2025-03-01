import { StyleSheet } from 'react-native';
import { Colors } from '../../ColorPalette/colors';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },

    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        left: 40,
        top: 225,
        color: Colors.growthly_darkblue,
        fontSize: 35,
        fontWeight: 'bold',
    },

    settingsContainer: {
        backgroundColor: Colors.growthly_lightblue,
        borderRadius: 15,
        width: 350,
        height: 470,
        top: 245,
        left: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    settingContainerText: {
        padding: 27,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: Colors.growthly_darkblue
    },

    buttonText: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: Colors.growthly_white
    },

    deleteButton: {
        position: 'absolute',
        top: 20,
        width: 310,
        height: 60,
        left: 20,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.growthly_red
    },
});

export default styles;