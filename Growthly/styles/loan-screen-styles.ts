import { StyleSheet } from 'react-native';
import { Colors } from './colors';

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
    applyButtonActive: {
        width: 130,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        position: 'absolute',
        top: 145,
        left: 40,
        borderWidth: 1,
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
        borderWidth: 1,
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

    test: {
        left: 40,
        top: 200
    }
});

export default styles;