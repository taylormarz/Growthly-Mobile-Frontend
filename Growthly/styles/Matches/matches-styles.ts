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

    matchesContainer: {
        left: 40,
        top: 245,
        width: 350,
        height: 250,
        borderRadius: 15,
        backgroundColor: Colors.growthly_lightblue,
    },

    matchesContainerText1: {
        fontFamily: 'Inter-Regular',
        marginTop: 15,
        padding: 25,
        fontSize: 18
    },

    matchesContainerText2: {
        paddingTop: 0,
    },

    keyline: {
        position: 'absolute',
        top: 105,
        left: 20,
        width: 310,
        borderWidth: .25,
        borderColor: Colors.growthly_teal2,
    },

    loanContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: Colors.growthly_white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.growthly_inputblue,
      },
    
      loanText: {
        fontSize: 16,
        color: Colors.growthly_darkblue,
        marginBottom: 4,
      },

      availableText: {
        fontSize: 14,
        color: Colors.growthly_green,
        fontWeight: 'bold',
      },
    
      unavailableText: {
        fontSize: 14,
        color: Colors.growthly_red,
        fontWeight: 'bold',
      },
});

export default styles;