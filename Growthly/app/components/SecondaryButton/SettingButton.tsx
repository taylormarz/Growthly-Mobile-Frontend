import { View, Text, TouchableOpacity } from 'react-native';
import styles from './SettingButton-styles';

interface Props {
  listItem: string;
  buttonText: string;
  onPress: () => void;
}

const SettingButton = ({ listItem, buttonText, onPress }: Props) => {
  return (
    <View>
        <View style={styles.settingComponent}>
            <View>
                <Text style={styles.settingContainerText}>{listItem}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.settingButton} onPress={onPress}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.keyline}></View>
        </View>
    </View>
  );
};

export default SettingButton;