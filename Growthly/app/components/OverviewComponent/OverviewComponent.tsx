import { View, Text, TouchableOpacity } from 'react-native';
import styles from './OverviewComponent.styles';

interface Props {
  title: string;
  value: string;
  buttonText: string;
  onPress: () => void;
  style?: object;
}

const OverviewComponent = ({
  title,
  value,
  buttonText,
  onPress,
  style,
}: Props) => {
  return (
    <View style={[styles.component, style]}>
      {/* container for titles and button */}
      <View style={styles.container}>
        {/* text */}
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>

        {/* button */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OverviewComponent;
